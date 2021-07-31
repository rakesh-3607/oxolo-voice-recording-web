import { WINDOW_WIDTH } from "../constants/constants";

export const ensureMediaPermissions = () => {
    return navigator.mediaDevices.enumerateDevices().then((devices) => {
        return devices.every((device) => {
            return !(device.deviceId && device.label);
        });
    }).then((shouldAskForMediaPermissions) => {
        if (shouldAskForMediaPermissions) {
            return navigator.mediaDevices.getUserMedia({ audio: true/* , video: true */ }).then((mediaStream) => {
                mediaStream.getTracks().forEach((track) => {
                    track.stop();
                });
            });
        }
    });
};

export const getLottieScale = (resolution: string) => {
    return new Promise((resolve, reject) => {
        let lottieScale: {} = { height: 200, width: 200 }
        switch (resolution) {
            case '320X568':
                lottieScale = { height: 110, width: 230 }
                break;
            case '360X640':
                lottieScale = { height: 130, width: 250 }
                break;
            case '375X667':
                lottieScale = { height: 150, width: 400 }
                break;
            case '411X731':
                lottieScale = { height: 180, width: 300 }
                break;
            case '411X823':
                lottieScale = { height: 200, width: '100%' }
                break;
            case '414X736':
                lottieScale = { height: 200, width: '100%' }
                break;
            case '1920X1080':
                lottieScale = { height: 250, width: 400 }
                break;
            case '1366X768':
                lottieScale = { height: 130, width: 300 }
                break;
            case '1440X900':
                lottieScale = { height: 190, width: 400 }
                break;
            case '1848X949':
                lottieScale = { height: 200, width: 400 }
                break;
            default:
                lottieScale = { height: WINDOW_WIDTH <= 768 ? 130 : 220, width: WINDOW_WIDTH <= 768 ? 300 : 400 }
                break;
        }
        resolve(lottieScale);
    })
}