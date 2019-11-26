import React, { Component } from "react";
import image1 from '../../assets/gallery/image-1.jpg'
import image2 from '../../assets/gallery/image-2.jpg'
import image3 from '../../assets/gallery/image-3.jpg'
import image9 from '../../assets/gallery/image-9.jpg'


class People extends Component {
    render() {
        return (
            <div>
                <div
                    className="section-bg-image bg-top"
                >
                    <div className="container content">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>People are beautiful</h1>
                                <p>
                                    Aaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="col-md-8 boxed-inverse shadow-1">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Premium support</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing
                                            elitsed doido.
                                        </p>
                                        <hr className="space s" />
                                        <div className="counter-box-simple text-color-2">
                                            <span
                                                className="counter text-l"
                                                data-speed="5000"
                                                data-to="50000"
                                                data-refresh-interval="100"
                                            ></span>
                                            <span> Costumers</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="fa-ul text-color ">
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Experienced
                                                team
                                            </li>
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Lovely,
                                                friendly and funny people
                                            </li>
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Thousands of
                                                satisfied cosutmers
                                            </li>
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Billions of
                                                transistors
                                            </li>
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Nanometric
                                                technologies
                                            </li>
                                            <li>
                                                <i className="fa-li fa fa-check"></i> Revolutionary
                                                flow work method
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="space" />
                        <div
                            className="flexslider carousel outer-navs"
                            data-options="minWidth:200,itemMargin:30,numItems:4,controlNav:false,directionNav:true"
                        >
                            <ul className="slides">
                                <li>
                                    <a
                                        className="img-box lightbox shadow-1"
                                        href="./images/gallery/image-1.jpg"
                                        data-lightbox-anima="fade-top"
                                    >
                                        <img src={image1} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="img-box lightbox shadow-1"
                                        href="./images/gallery/image-1.jpg"
                                        data-lightbox-anima="fade-top"
                                    >
                                        <img src={image2} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="img-box lightbox shadow-1"
                                        href="./images/gallery/image-1.jpg"
                                        data-lightbox-anima="fade-top"
                                    >
                                        <img src={image9} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="img-box lightbox shadow-1"
                                        href="./images/gallery/image-1.jpg"
                                        data-lightbox-anima="fade-top"
                                    >
                                        <img src={image3} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="img-box lightbox shadow-1"
                                        href="./images/gallery/image-1.jpg"
                                        data-lightbox-anima="fade-top"
                                    >
                                        <img src={image1} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default People;
