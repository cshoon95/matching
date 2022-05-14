import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../img/carousel1.jpeg';
import carousel2 from '../img/carousel2.jpeg';
import carousel3 from '../img/carousel3.jpeg';

const CarouselPanel = () => {
    return (
        <Carousel fade className="mgl-01 mgr-01">
            <Carousel.Item>
                <img
                    className="d-block w-100 h-200"
                    src={carousel1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-200"
                    src={carousel2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-200"
                    src={carousel3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselPanel;