'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeImage from "@/components/ui/recipe-image/RecipeImage";
import './Carousel.scss'

export default function Carousel({slides}) {
    console.log(slides);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="containerSlider">
            <Slider {...settings}>
                {slides.map((slide, i) => (

                    <div key={i}>
                        <RecipeImage img={slide.img} bgColor={slide.color}/>
                    </div>

                ))}

            </Slider>
        </div>
    );
}
