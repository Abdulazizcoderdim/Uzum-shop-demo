import { useState } from "react";


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: "all .50s ease", 
    };
    const leftArrowStyles ={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgb(240, 240, 240)",
        padding: "0 12px",
        borderRadius: "50%",
        opacity: '0.8'
    };
    const rightArrowStyles ={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
        backgroundColor: "rgb(240, 240, 240)",
        padding: "0 12px",
        borderRadius: "50%",
        opacity: '0.8'
    };
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: "-40px"
    }

    const doStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "40px",
        color: "rgb(248, 246, 246)"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    } 

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>{'<'}</div>
            <div style={rightArrowStyles} onClick={goToNext}>{'>'}</div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} style={doStyles} onClick={() => goToSlide(slideIndex)}>•</div>
              ))}    
            </div> 
        </div>
    );
};

export default ImageSlider;