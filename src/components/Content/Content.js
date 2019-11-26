import React, { Component } from "react";
import image from "../../assets/savings.svg";
import Product from "./Product";
import Features from "./Features";
import People from "./People";

class Content extends Component {
    render() {
        return (
            <div>
                <div
                    class="header-title full-screen-title white"
                >
                    <div class="overlaybox">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="title-base">
                                        <hr class="anima" />
                                        <h2>
                                            Innovative Solutions tailored to meet your financial
                                            objectives
                                        </h2>

                                        <p>Things don't have to change the world to be important</p>

                                        <br />
                                        <br />
                                        <a
                                            href="#products"
                                            class="circle-button btn btn-lg shadow-1"
                                        >
                                            Explore Products
                                        </a>
                                        <span class="space"></span>
                                        <a
                                            href="/register"
                                            class="circle-button btn btn-border btn-lg logged-out"
                                        >
                                            <i class="fa fa-play"></i>Get Started
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-6" id="title-img">
                                    <img src={image} alt="BBMPCS" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Product />
                <Features />
                <People />
            </div>
        );
    }
}

export default Content;
