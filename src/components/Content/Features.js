import React, { Component } from 'react';
import './Features.css'
import image1 from '../../assets/box-1.png'
import image2 from '../../assets/box-2.png'

class Features extends Component {
    render() {
        return (
            <div>
                <div className="section-bg-image bg-top">
		<div className="container content">
			<h1 className="text-center">Features</h1>
			<hr className="space" />
			<div className="row vertical-row">
				<div className="col-md-6">
					<img src={image1} alt="" data-anima="fade-left" data-time="1000" />
				</div>
				<div className="col-md-6">
					<h4>Analytics & reporting</h4>
					<p>
						Algolia’s analytics dashboard helps product teams better understand what their users are looking for most,
						as well as where they are hitting dead-ends most often.
						Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismo.
					</p>
					<a href="#" className="circle-button btn btn-sm">View datas</a>
				</div>
			</div>
			<hr className="space m" />
			<div className="row vertical-row">
				<div className="col-md-6">
					<h4>Analytics & reporting</h4>
					<p>
						Algolia’s analytics dashboard helps product teams better understand what their users are looking for most,
						as well as where they are hitting dead-ends most often.
						Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismo.
					</p>
					<hr className="space s" />
					<a href="#" className="circle-button btn btn-sm">View datas</a><span className="space"></span>
					<a href="#" className="circle-button btn btn-border btn-sm">Details</a>
				</div>
				<div className="col-md-6">
					<img src={image2} alt="" data-anima="fade-right" data-time="1000" />
				</div>
			</div>
		</div>
	</div>
                
            </div>
        );
    }
}

export default Features;
