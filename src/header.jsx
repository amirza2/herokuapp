import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   render() {
      return (
      <header>
		<div className="w3layouts-top-strip">
			<div className="container">
			  <div style = {{"float":"right"}}>
			  <a href="">SIGN UP</a>&nbsp;&nbsp;&nbsp;
			  <a href="">LOG IN</a>
			  </div>
			  
				<div className="logo">
					<h1><a href="index.html">Fashion Blog</a></h1>
					<p>lets make a Life style</p>
				</div>
				<div className="w3ls-social-icons">
					<a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
					<a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
					<a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a>
					<a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
					<a className="linkedin" href="#"><i className="fa fa-google-plus"></i></a>
					<a className="linkedin" href="#"><i className="fa fa-rss"></i></a>
					<a className="linkedin" href="#"><i className="fa fa-behance"></i></a>
				</div>
			</div>
		</div>
		
			<nav className="navbar navbar-default">
			  <div className="container">
				
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				</div>

				
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				  <ul className="nav navbar-nav">
					<li><a className="active" href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="lifestyle.html">Life Style</a></li>
					
					<li><a href="fashion.html">Fashion</a></li>
					<li className="dropdown">
					  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Short Codes <span className="caret"></span></a>
					  <ul className="dropdown-menu">
					  <li><a href="icons.html">Icons Page</a></li>
						<li><a href="typo.html">Typography</a></li>
						
					  </ul>
					</li>
					<li><a href="photography.html">Photography</a></li>
					<li><a href="features.html">Features</a></li>
					<li><a href="contact.html">Contact</a></li>
				  </ul>
				</div>
				<div className="w3_agile_login">
							<div className="cd-main-header">
								<a className="cd-search-trigger" href="#cd-search"> <span></span></a>
							
							</div>
							<div id="cd-search" className="cd-search">
								<form action="#" method="post">
									<input name="Search" type="search" placeholder="Search..."/>
								</form>
							</div>
						</div>
						<div className="clearfix"> </div>

			  </div>
			</nav>
			
		
	</header>
        
      )
   }
}

export default App;


