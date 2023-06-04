import React from "react";
import homePageImage from '../../assets/HomePageImage.jpg';
import './homepage-image.styles.scss';

const HomePageImage = () => {
    return (
        <div className="big-img-container">
            <div className="text-container">
                <h1 className="centered-text">MegaLinks</h1>
                <p>Get Ready For Your Next Edit</p>
            </div>
            <img className="big-img" src={homePageImage}/>
        </div> 
    );
};

export default HomePageImage;