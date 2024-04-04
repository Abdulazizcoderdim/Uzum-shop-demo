import ImageSlider from './ImageSlider';
import './Slider.css'

const Slider = () => {
    const slides = [
        {url: '../../../public/slider1.png'},
        {url: '../../../public/slider2.png'},
        {url: '../../../public/slider3.png'}
    ]

    const containerStyles = {
        width: "1350px",
        height: "500px",
        margin: "0 auto",
    }

    return (
        <div className='slider'>
            <div className="slider__container">
                <div style={containerStyles}>
                 <ImageSlider slides={slides}/>   
                </div>
            </div> 
        </div>
    );
};

export default Slider;