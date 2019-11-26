import React, { Component } from 'react';
import logo from '../../assets/bbmpcs-logo.png'

class Footer extends Component {
    render() {
        return (
            <div>

<footer class="footer-base">
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-3 footer-center text-left">
						<img width="120" src={logo} alt="" />
					</div>
					<div class="col-md-6 footer-left text-left">
						<p>No 62, Erepa Road,
							Yenizuegene,
							Yenagoa,
							Bayelsa State,
							Nigeria</p>
						<div class="tag-row">
							<span>hello@bbmpcs.ng</span>
							<span>+2349030487810</span>
						</div>
					</div>
					<div class="col-md-3 footer-left text-right text-left-sm">
						<div class="btn-group social-group btn-group-icons">
							<a target="_blank" href="https://facebook.com/brassandbooks" data-social="share-facebook">
								<i class="fa fa-facebook text-xs circle"></i>
							</a>
							<a target="_blank" href="https://instagram.com/brassandbooks" data-social="share-instagram">
								<i class="fa fa-instagram text-xs circle"></i>
							</a>
							<a target="_blank" href="#" data-social="share-google">
									<i class="fa fa-google-plus text-xs circle"></i>
							</a>
							<a target="_blank" href="#" data-social="share-linkedin">
									<i class="fa fa-linkedin text-xs circle"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row copy-row">
				<div class="col-md-12 copy-text">
					© 2019 BBMPCS <span>Developed by <a class="para" href="http://safescrow.com.ng/">SafeScrow</a></span>
				</div>
			</div>
		</div>
	</footer>
		</div>
                
        );
    }
}

export default Footer;
