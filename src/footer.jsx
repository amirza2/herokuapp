import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
class App extends React.Component {
   render() {
      return (
      <div>
	        <div className="footer-agile-info">
			<div className="container">
				<div className="col-md-4 w3layouts-footer">
					<h3>Contact Information</h3>
						<p><span><i className="fa fa-map-marker" aria-hidden="true"></i></span>22 Russell Street, Victoria ,Melbourne AUSTRALIA </p>
						<p><span><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="#">E: info [at] domain.com</a> </p>
						<p><span><i className="fa fa-mobile" aria-hidden="true"></i></span>P: +254 2564584 / +542 8245658 </p>
						<p><span><i className="fa fa-globe" aria-hidden="true"></i></span><a href="#">W: www.w3layouts.com</a></p>
				</div>
				<div className="col-md-4 wthree-footer">
					<h2>Fashion Blog</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute .</p>
				</div>
				<div className="col-md-4 w3-agile">
					<h3>Newsletter</h3>
					<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<form action="#" method="post">
						<input type="email" name="Email" placeholder="Email" required=""/>
						<input type="submit" value="Send"/>
					</form>
				</div>
			</div>
		</div>

		<div className="copyright">
			<div className="container">
				<div className="w3agile-list">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="lifestyle.html">Life Style</a></li>
						<li><a href="photography.html">Photography</a></li>
						<li><a href="fashion.html">Fashion</a></li>
						<li><a href="icons.html">Codes</a></li>
						<li><a href="features.html">Features</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</div>
				<div className="agileinfo">
					<p>© 2017 Fashion Blog . All Rights Reserved . Design by <a href="http://w3layouts.com/">W3layouts</a></p>
				</div>
			</div>
		</div>
	</div>
      )
   }
}

export default App;

