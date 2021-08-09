import { Component, createRef } from 'react';
import Lottie from 'react-lottie';
import RecordRTC, { StereoAudioRecorder, Options } from 'recordrtc';

import { ensureMediaPermissions, getLottieScale } from '../../shared/utils/utiity';
import HttpService from '../../shared/services/http.service';
import { CAMPAIGNS, WINDOW_WIDTH, WINDOW_HEIGHT } from '../../shared/constants/constants'

import { Mic, PlayIcon, ReRecord, StopIcon } from '../../assets/icons/svgIcons';
import { Carousel, SubmitButton } from '../../shared/common/carousel';
import animationData from '../../assets/animations/lf30_editor_kwigzxyh.json';

interface Sentence {
    sentenceId: string,
    code: string,
    sentence: string
}

interface Props { }

interface UIState {
    micPermissionBlocked: boolean;
    isRecording: boolean;
    isPlaying: boolean;
    isSubmitting: boolean;
    playerStatus: string;
    campaignData: Sentence[];
    currentCampaignIndex: number;
    micOption: any;
    recordedAudio: string;
    reRecording: boolean;
    lottieScale: {
        height: number | string;
        width: number | string;
    },
    recordError: {
        isError: boolean;
        message: string;
    }
    // [key: string]: any
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
class Campaign extends Component<Props> {
    recorder: any = null;
    microphone: any = null;
    audioRef: any = createRef();
    userInfo: object = {};

    state: UIState = {
        micPermissionBlocked: false,
        isRecording: false,
        isPlaying: false,
        isSubmitting: false,
        playerStatus: 'stop',
        campaignData: [],
        currentCampaignIndex: parseInt(localStorage.getItem("currentCampaignIndex") || '0'),
        recordedAudio: "",
        reRecording: false,
        micOption: {
            loop: true,
            autoplay: false,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        },
        lottieScale: {
            height: 200,
            width: 200
        },
        recordError: {
            isError: false,
            message: 'string'
        }
    };

    componentDidMount = () => {
        this.createUser()
        this.getCampaignData()
        getLottieScale(WINDOW_WIDTH + 'X' + WINDOW_HEIGHT)
            .then(lottieScale => {
                this.setState({ lottieScale })
            });
        // this.setState({
        //     lottieScale: {
        //         height: (WINDOW_HEIGHT <= 768 ? (WINDOW_WIDTH <= 1024 ? 115 : 150) : (WINDOW_HEIGHT >= 731 ? 200 : 135)),
        //         width: (WINDOW_WIDTH <= 1024 ? 330 : (WINDOW_HEIGHT >= 731 ? 300 : 130))
        //     }
        // })
        // this.initRecording()
    }

    getCampaignData = () => {
        this.setState({
            campaignData: CAMPAIGNS,
        });
    };

    createUser = () => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        if (userId && token) {
            return
        }
        HttpService.post('auth/guest')
            .then((res: any) => {
                localStorage.setItem("userId", res.id);
                localStorage.setItem("token", res.token);
                localStorage.setItem("currentCampaignIndex", '0');
            })
    }

    initRecording = async () => {
        if (!this.microphone) {
            await this.captureMicrophone((mic: any) => {
                this.microphone = mic;

                if (isSafari) {
                    alert('Please click startRecording button again. First time we tried to access your microphone. Now we will record it.');
                    return;
                }
            });
        }
        var options: Options = {
            type: 'audio',
            mimeType: 'audio/wav',
            numberOfAudioChannels: 1,
            checkForInactiveTracks: true,
            bufferSize: 16384,

            // only for audio track
            audioBitsPerSecond: 128000,

            // for 16khz recording
            desiredSampRate: 16000,
        };
        if (isSafari || isEdge) {
            options.recorderType = StereoAudioRecorder;
        }

        if (navigator.platform && navigator.platform.toString().toLowerCase().indexOf('win') === -1) {
            options.sampleRate = 48000;
        }

        if (isSafari) {
            options.sampleRate = 44100;
            options.bufferSize = 16384;
            options.numberOfAudioChannels = 2;
        }

        if (this.recorder) {
            this.recorder.destroy();
            this.recorder = null;
        }

        this.recorder = new RecordRTC(this.microphone, options);
    }

    handleRecordToggle = (operation: string) => {
        ensureMediaPermissions()
            .then((res: any) => {
                this.audioRef.pause()
                this.audioRef.currentTime = 0;
                const value = operation === 'isRecording' ? !this.state.isRecording : !this.state.reRecording;
                this.setState({ [operation]: value, playerStatus: 'stop', isPlaying: false, recordError: { isError: false, message: '' } }, () => {
                    if (value) {
                        this.handleStartRecording()
                    } else {
                        this.handleStopRecording()
                    }
                });
            })
            .catch((error: any) => {
                this.setState({ micPermissionBlocked: true })
                console.log("Error : ", error);
            })

    };

    handleAudioPlay = (playerStatus: string) => {
        switch (playerStatus) {
            case 'play':
                this.setState({ playerStatus }, () => this.audioRef.play());
                break;
            case 'pause':
                this.setState({ playerStatus }, () => this.audioRef.pause());
                break;
            case 'stop':
                this.setState({ playerStatus }, () => {
                    this.audioRef.pause()
                    this.audioRef.currentTime = 0;
                });
                break;
            default:
                break;
        }
    }

    toggleAudioPlay = (value: boolean) => {
        this.setState({ isPlaying: value }, () => {
            if (this.state.isPlaying) {
                this.audioRef.play()
            } else {
                this.audioRef.pause()
                this.audioRef.currentTime = 0;
            }
        })
    }

    handleSubmit = () => {
        this.setState({ isSubmitting: true })
        var SubmitButton = document.getElementsByClassName("submit-button")[0];
        SubmitButton.classList.add("pending");

        setTimeout(function () {
            SubmitButton.classList.add("success");
        }, 1000);

        setTimeout(function () {
            // SubmitButton.classList.remove("pending");
            // SubmitButton.classList.remove("success");
            SubmitButton.classList.add("hide");
        }, 1500);
        setTimeout(() => {
            // document.body.removeChild(SubmitButton)
            this.setState({ isSubmitting: false, recordedAudio: '', currentCampaignIndex: this.state.currentCampaignIndex + 1 }, () => {
                localStorage.setItem("currentCampaignIndex", (this.state.currentCampaignIndex).toString())
                this.getUploadCredentials()
            })
        }, 1700);
    }

    getUploadCredentials = () => {
        const params = { sentenceId: this.state.campaignData[this.state.currentCampaignIndex - 1].sentenceId }
        HttpService.post('recording/upload-credential', params)
            .then((credentials: any) => {
                this.uploadFileToS3(credentials)
                    .then(audioDetails => {
                        this.saveRecording(audioDetails);
                    })
            })
            .catch((err: any) => {
                console.log("Get credintials Error : ", err);
            })
    }

    getRandomString = () => {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }

    getFileName = (fileExtension: string) => {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        return 'Speak-' + year + month + date + '-' + this.getRandomString() + '.' + fileExtension;
    }


    uploadFileToS3 = (presignedPostData: any) => {
        const sentenceId = this.state.campaignData[this.state.currentCampaignIndex - 1].sentenceId
        const fileUrl = `${presignedPostData.uploadUrl}/${sentenceId}/${presignedPostData.fileId}`
        const file = new File([this.recorder.getBlob()], this.getFileName('wav'), {
            type: 'audio/wav'
        });

        const params = {
            sentenceId,
            fileUrl,
            fileId: presignedPostData.fileId
        }
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            Object.keys(presignedPostData.fields).forEach(key => {
                formData.append(key, presignedPostData.fields[key]);
            });
            // Actual file has to be appended last.
            formData.append("file", file);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", presignedPostData.uploadUrl, true);
            xhr.send(formData);
            xhr.onload = function () {
                this.status === 204 ? resolve(params) : reject(this.responseText);
            };
        });
    };

    saveRecording = (params: any) => {
        HttpService.post('recording/submit', params)
            .then((res: any) => {
            })
            .catch((err: any) => {
                console.log("save recording Error : ", err);
            })
    }

    captureMicrophone = async (callback: any) => {
        if (this.microphone) {
            callback(this.microphone);
            return;
        }

        if (typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {
            alert('This browser does not supports WebRTC getUserMedia API.');

            if (!!navigator.getUserMedia) {
                alert('This browser seems supporting deprecated getUserMedia API.');
            }
        }

        await navigator.mediaDevices.getUserMedia({
            audio: /* isEdge ? true : */ {
                echoCancellation: true
            }
        }).then(function (mic) {
            callback(mic);
        }).catch(function (error) {
            alert('Unable to capture your microphone. Please check console logs.');
            console.error(error);
        });
    }

    handleStartRecording = async () => {
        await this.initRecording()
        this.recorder.startRecording();
    }

    replaceAudio = () => {
        this.audioRef.pause();
        this.audioRef.load();
    }

    handleStopRecording = () => {
        this.recorder.stopRecording(async (data: any) => {
            if (!this.recorder || !this.recorder.getBlob() || this.recorder.getBlob().size <= 10000) {
                this.setState({ recordedAudio: '', recordError: { isError: true, message: 'The recording was too short, please record again.' } })
                return;
            } else {
                this.setState({ recordError: { isError: false, message: '' }, recordedAudio: data }, () => {
                    this.replaceAudio();
                });
            }
        })
    }

    render() {
        const { isRecording, micOption, micPermissionBlocked, recordError, isSubmitting, isPlaying, campaignData, recordedAudio, reRecording, /* playerStatus, */ currentCampaignIndex } = this.state;
        const disableSubmitButton = !recordedAudio || reRecording || isRecording || isPlaying;
        return (
            <div className="speak-slider-wrapper">
                <div className="record-instruction">
                    {(micPermissionBlocked || recordError.isError)
                        ? <p className="danger"> {recordError.isError ? recordError.message : 'You must allow microphone access.'}</p>
                        : <p> {(isRecording || reRecording || !recordedAudio) ? 'Click ' : 'Great! Submit your recorded clip, or click '} {(isRecording || reRecording) ? < StopIcon width="15" height="15" color="#2E8EFF" /> : (recordedAudio ? < ReRecord width="15" height="15" color="#2E8EFF" /> : < Mic width="18" height="18" color="#2E8EFF" />)}{(isRecording || reRecording) ? ' , when you done.' : (recordedAudio ? ' to re-record current clip.' : ', then read the sentence aloud')}</p>
                    }
                </div>
                <Carousel
                    slideData={campaignData.map((ele: Sentence, index: number) => ele.sentence)}
                    initialSlide={currentCampaignIndex}
                />
                {currentCampaignIndex < 100 && (
                    <div className="footer">
                        <div className="record-wrapper">
                            <Lottie
                                options={micOption}
                                height={'200px'}
                                style={{ transition: '0.2s all ease-in-out', opacity: ((isRecording || reRecording) ? '0.5' : '0') }}
                                width={'300px'}
                                isStopped={!isRecording && !reRecording}
                                isPaused={false}
                            />
                            <div className="record-button-wrapper">
                                <div className={`record-button ${(recordedAudio || isSubmitting) ? 'hide-recording-button' : ''}`}>
                                    <button title={isRecording ? 'Stop' : 'Record'} disabled={!!recordedAudio} onClick={() => !recordedAudio && this.handleRecordToggle('isRecording')}>
                                        {isRecording
                                            ? <StopIcon width="30" height="30" color="#2E8EFF" />
                                            : <Mic width="30" height="30" color="#2E8EFF" />}
                                    </button>
                                    <div className="record-button-bg"></div>
                                </div>
                                <>
                                    <audio controls id="recorded-audio" ref={(ele) => this.audioRef = ele} preload="auto" autoPlay={false} /* onEnded={() => this.handleAudioPlay('stop')} */ onEnded={() => this.toggleAudioPlay(false)}>
                                        <source src={recordedAudio} /* type="audio/ogg" */ />
                                        {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                                        Your browser does not support the audio tag.
                                    </audio>
                                    <div className={`record-button ${(!recordedAudio || isRecording || reRecording || isSubmitting) ? 'hide-recording-button' : ''}`}>
                                        <button title={isPlaying ? 'Stop' : 'Play'} onClick={() => this.toggleAudioPlay(!isPlaying)}>
                                            {isPlaying
                                                ? <StopIcon width="30" height="30" color="#2E8EFF" />
                                                : <PlayIcon width="40" height="40" color="#2E8EFF" />}
                                        </button>
                                        <div className="record-button-bg"></div>
                                    </div>
                                </>
                                {<SubmitButton processing={isSubmitting} disabled={disableSubmitButton} handleSubmit={() => !disableSubmitButton && this.handleSubmit()} />}
                                <div className={`record-button ${(!recordedAudio || isSubmitting) ? 'hide-recording-button' : ''}`}>
                                    <button
                                        disabled={!recordedAudio}
                                        title={reRecording ? 'Stop' : (recordedAudio ? 'Re-record' : 'Record')}
                                        onClick={() => !!recordedAudio && this.handleRecordToggle('reRecording')}>
                                        {reRecording
                                            ? <StopIcon width="30" height="30" color="#2E8EFF" />
                                            : (recordedAudio
                                                ? <ReRecord width="30" height="30" color="#2E8EFF" />
                                                : <Mic width="30" height="30" color="#2E8EFF" />)}
                                    </button>
                                    <div className="record-button-bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Campaign;
