import React, { Component } from "react";
import business from '../../assets/business-shop.png'
import invest from '../../assets/investing.png'
import loan from '../../assets/loan.png'
import image1 from '../../assets/image-1.jpg'

class Product extends Component {
    render() {
        return (
            <div>
                <div className="container content">
                    <hr className="space" id="products" />
                    <hr className="space l" />
                    <div
                        className="flexslider carousel outer-navs"
                        data-options="minWidth:200,itemMargin:30,numItems:3,controlNav:true,directionNav:true"
                    >
                        <ul className="slides">
                            <li>
                                <div className="advs-box advs-box-top-icon-img boxed-inverse shadow-1">
                                    <a className="img-box lightbox img-scale-up" href="#">
                                        <span>
                                            <img src={business} alt="" />
                                        </span>
                                    </a>
                                    <div className="advs-box-content">
                                        <h3>Savings products</h3>
                                        <p>
                                            Savings products that fit your short to long goals with
                                            next to none interest rates
                                        </p>
                                        <a className="btn btn-sm" href="/save">
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="advs-box advs-box-top-icon-img boxed-inverse shadow-1">
                                    <a className="img-box lightbox img-scale-up" href="#">
                                        <span>
                                            <img src={invest} alt="" />
                                        </span>
                                    </a>
                                    <div className="advs-box-content">
                                        <h3>Investment Products</h3>
                                        <p>
                                            Short to Long term investment products that matches your
                                            risk appetite
                                        </p>
                                        <a className="btn btn-sm" href="/invest">
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="advs-box advs-box-top-icon-img boxed-inverse shadow-1">
                                    <a className="img-box lightbox img-scale-up" href="#">
                                        <span>
                                            <img src={loan} alt="" />
                                        </span>
                                    </a>
                                    <div className="advs-box-content">
                                        <h3>Loan Products</h3>
                                        <p>
                                            Loans for individuals and groups; Working Capital
                                            financing for small to mid level businesses
                                        </p>
                                        <a className="btn btn-sm" href="/loan">
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="advs-box advs-box-top-icon-img boxed-inverse shadow-1">
                                    <a className="img-box lightbox img-scale-up" href="#">
                                        <span>
                                            <img src={image1} alt="" />
                                        </span>
                                    </a>
                                    <div className="advs-box-content">
                                        <h3>Content box title</h3>
                                        <p>
                                            Interdum iusto pulvinar consequuntur augue optio,
                                            repellat fuga! Purus expedita fusco.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
