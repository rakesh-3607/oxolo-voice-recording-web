import { Fragment, useRef } from "react";
import Slider, { Settings } from "react-slick";
import animationData from '../../assets/animations/particlesCirtualizer.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "react-lottie";

interface CarouselProps {
    slideData: Array<number | string>;
    initialSlide: number;
}

interface SubmitButtonProps {
    disabled: boolean
    handleSubmit: () => void;
}


let sliderRef: any;

const settings: Settings = {
    className: "center",
    centerMode: true,
    initialSlide: 0,
    centerPadding: '400px',
    slidesToShow: 1,
    speed: 500,
    easing: '10',
    accessibility: false,
    draggable: false,
    focusOnSelect: false,
    swipe: false,
    waitForAnimate: false,
    responsive: [{
        breakpoint: 1600,
        settings: {
            arrows: false,
            centerPadding: '250px',
        }
    }, {
        breakpoint: 1224,
        settings: {
            arrows: false,
            centerPadding: '180px',
        }
    }, {
        breakpoint: 1024,
        settings: {
            arrows: false,
            centerPadding: '150px',
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerPadding: '0',
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerPadding: '0',
        }
    }]
};



const Carousel = (props: CarouselProps) => {
    sliderRef = useRef(null);

    const renderData = () => props.slideData.map((data: number | string, index: number) => {
        return (
            <Fragment key={index}>
                <div className="slide">
                    <div>{data}</div>
                    {/* {props.initialSlide === index && <div className={`visualizer`}>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: false,
                                animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                        />
                    </div>} */}
                </div>
                <div className="blur-overlay"></div>
            </Fragment>
        );
    });

    return (
        <div className="slider-wrapper">
            <Slider ref={ele => sliderRef = ele} {...{ ...settings, initialSlide: props.initialSlide }}>
                {renderData()}
            </Slider>
        </div >
    );
}

const handleSubmit = (props: SubmitButtonProps) => {
    props.handleSubmit()
    sliderRef.slickNext()
};

const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <div className={`submit-button`}>
            <button disabled={props.disabled} onClick={() => !props.disabled && handleSubmit(props)}>Submit</button>
            <div className="record-button-bg"></div>
        </div>
    );
};

export {
    Carousel,
    SubmitButton
};