// LogoSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaReact, FaAws, FaMdb, FaNode, FaDocker,FaFigma, FaJs, FaLaravel} from 'react-icons/fa'; // Import icons from react-icons
import styles from "./logoSlider.module.scss"

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Increase autoplay speed to 3000 milliseconds (3 seconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Example array of logos (using React icons)
    const logos = [
        { id: 1, icon: <FaReact size={64} />,  }, // Set size prop to adjust icon size
        { id: 2, icon: <FaAws size={64} />, }, // Set size prop to adjust icon size
        { id: 3, icon: <FaMdb size={64} />, }, // Set size prop to adjust icon size
        { id: 4, icon: <FaDocker size={64} />, }, 
        { id: 5, icon: <FaNode size={64} />, }, 
        { id: 6, icon: <FaJs size={64} />, }, 
        { id: 7, icon: <FaFigma size={64} />, }, 
        { id: 8, icon: <FaLaravel size={64} />, }, 
        // Set size prop to adjust icon size
        // Add more icons as needed
    ];

    return (
        <Slider {...settings}>
            {logos.map((logo) => (
                <div className={styles.sliderBar} key={logo.id}>
                    <div style={{ fontSize: '64px', textAlign: 'center' }}>{logo.icon}</div>
                </div>
            ))}
        </Slider>
    );
};

export default LogoSlider;
