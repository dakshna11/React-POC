import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/carousel-1.jpg'
import img2 from '../img/carousel-2.jpg'
import img3 from '../img/carousel-3.jpg'
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <div>
                    <img src={img1}/><p>Image 1</p>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>