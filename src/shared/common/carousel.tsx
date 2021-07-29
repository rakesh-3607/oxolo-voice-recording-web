import { useRef } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    slideData: Array<number | string>;
    initialSlide: number;
}

interface SubmitButtonProps {
    disabled: boolean
    handleSubmit: () => void;
}


let sliderRef: any;


const Carousel = (props: CarouselProps) => {
    sliderRef = useRef(null);

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


    const renderData = () => {
        return props.slideData.map((data: number | string, index: number) => {
            return (
                <>
                    <div key={index} className="slide">
                        <div>{data}</div>
                    </div>
                    <div className="blur-overlay"></div>
                </>
            )
        })
    }


    return (
        <div className="slider-wrapper">
            <Slider ref={ele => sliderRef = ele} {...settings}>
                {renderData()}
            </Slider>
        </div >
    );
}

const handleSubmit = (props: SubmitButtonProps) => {
    props.handleSubmit()
    sliderRef.slickNext()
}

const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <button className="submit-button" disabled={props.disabled} onClick={() => handleSubmit(props)}>Submit</button>
    )
}

export {
    Carousel,
    SubmitButton
};