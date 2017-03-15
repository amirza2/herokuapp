import React from 'react';
import ReactDOM from 'react-dom';
class Home extends React.Component {

	componentWillMount(){
		$(window).load(function(){
		  $('.flexslider').flexslider({
			animation: "slide",
			start: function(slider){
			  $('body').removeClass('loading');
			}
		  });
		  $('#demo1').skdslider({'delay':5000, 'animationSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoSlide':true,'animationType':'fading'});
						
			$('#responsive').change(function(){
			  $('#responsive_wrapper').width(jQuery(this).val());
			});
			
			$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			});
		});




	}
   render() {
      return (
         <div>
          <div className="w3-slider">	
			
				<ul id="demo1">
					<li>
						<img src={require("../src/images/1.jpg")} alt="" />
						
						<div className="slide-desc">
							<h3>Fashion</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy. </p>
						</div>
					</li>
					<li>
						<img src={require("../src/images/2.jpg")} alt="" />
						  <div className="slide-desc">
							<h3>Life Style </h3>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
						</div>
					</li>
					<li>
						<img src={require("../src/images/3.jpg")} alt="" />
						<div className="slide-desc">
							<h3>Photography</h3>
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. </p>
						</div>
					</li>
					
				</ul>
			</div>
			
			
			<div className="container">
				<div className="banner-btm-agile">
				
					<div className="col-md-9 btm-wthree-left">
						<div className="wthree-top">
							<div className="w3agile-top">
								<div className="w3agile_special_deals_grid_left_grid">
									<a href="singlepage.html"><img src={require("../src/images/4.jpg")} className="img-responsive" alt="" /></a>
								</div>
								<div className="w3agile-middle">
								<ul>
									<li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</a></li>
									<li><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>201 LIKES</a></li>
									<li><a href="#"><i className="fa fa-comment" aria-hidden="true"></i>15 COMMENTS</a></li>
									
								</ul>
							</div>
							</div>
							
							<div className="w3agile-bottom">
								<div className="col-md-3 w3agile-left">
									<h5>Sit amet consectetur</h5>
								</div>
								<div className="col-md-9 w3agile-right">
									<h3><a href="singlepage.html">Amet consectetur adipisicing </a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor in elit sed uta labore dolore reprehender</p>
									<a className="agileits w3layouts" href="singlepage.html">Read More <span className="glyphicon agileits w3layouts glyphicon-arrow-right" aria-hidden="true"></span></a>
								</div>
									<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="wthree-top-1">
							<div className="w3agile-top">
								<section className="slider">
							<div className="flexslider">
								<ul className="slides">
									<li>
										<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/2.jpg")} className="img-responsive" alt="" /></a>
										</div>
									</li>
									<li>
										<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/3.jpg")} className="img-responsive" alt="" /></a>
										</div>
									</li>
									<li>
										<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/3.jpg")} className="img-responsive" alt="" /></a>
										</div>
									</li>
								</ul>
							</div>
						</section>
					
						
							
						
					

								<div className="w3agile-middle">
								<ul>
									<li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</a></li>
									<li><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>201 LIKES</a></li>
									<li><a href="#"><i className="fa fa-comment" aria-hidden="true"></i>15 COMMENTS</a></li>
									
								</ul>
							</div>
							</div>
							
							<div className="w3agile-bottom">
								<div className="col-md-3 w3agile-left">
									<h5>Sit amet consectetur</h5>
								</div>
								<div className="col-md-9 w3agile-right">
									<h3><a href="singlepage.html">Amet consectetur adipisicing </a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor in elit sed uta labore dolore reprehender</p>
									<a className="agileits w3layouts" href="singlepage.html">Read More <span className="glyphicon agileits w3layouts glyphicon-arrow-right" aria-hidden="true"></span></a>
								</div>
									<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="wthree-top-1">
							<div className="w3agile-top">
								<iframe src="https://player.vimeo.com/video/37111758"   allowFullScreen ></iframe>

								<div className="w3agile-middle">
								<ul>
									<li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</a></li>
									<li><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>201 LIKES</a></li>
									<li><a href="#"><i className="fa fa-comment" aria-hidden="true"></i>15 COMMENTS</a></li>
									
								</ul>
							</div>
							</div>
							
							<div className="w3agile-bottom">
								<div className="col-md-3 w3agile-left">
									<h5>Sit amet consectetur</h5>
								</div>
								<div className="col-md-9 w3agile-right">
									<h3><a href="singlepage.html">Amet consectetur adipisicing </a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor in elit sed uta labore dolore reprehender</p>
									<a className="agileits w3layouts" href="singlepage.html">Read More <span className="glyphicon agileits w3layouts glyphicon-arrow-right" aria-hidden="true"></span></a>
								</div>
									<div className="clearfix"></div>
							</div>
						</div>
						
						<div className="wthree-top-1">
							<div className="w3agile-top">
							<div className="col-md-6 w3-lft">
								<div className="w3agile_special_deals_grid_left_grid">
									<a href="singlepage.html"><img src={require("../src/images/5.jpg")} className="img-responsive" alt="" /></a>
								</div>
							</div>
							<div className="col-md-6 w3-rgt">
								<div className="w3-rgt-top">
									<div className="w3agile_special_deals_grid_left_grid">
										<a href="singlepage.html"><img src={require("../src/images/g6.jpg")} className="img-responsive" alt="" /></a>
									</div>
								</div>
								<div className="w3-rgt-top1">
									<div className="w3agile_special_deals_grid_left_grid">
										<a href="singlepage.html"><img src={require("../src/images/g8.jpg")} className="img-responsive" alt="" /></a>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
								<div className="w3agile-middle">
								<ul>
									<li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</a></li>
									<li><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>201 LIKES</a></li>
									<li><a href="#"><i className="fa fa-comment" aria-hidden="true"></i>15 COMMENTS</a></li>
									
								</ul>
							</div>
							</div>
							
							<div className="w3agile-bottom">
								<div className="col-md-3 w3agile-left">
									<h5>Sit amet consectetur</h5>
								</div>
								<div className="col-md-9 w3agile-right">
									<h3><a href="singlepage.html">Amet consectetur adipisicing </a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor in elit sed uta labore dolore reprehender</p>
									<a className="agileits w3layouts" href="singlepage.html">Read More <span className="glyphicon agileits w3layouts glyphicon-arrow-right" aria-hidden="true"></span></a>
								</div>
									<div className="clearfix"></div>
							</div>
						</div>
					
					</div>
					
						
					<div className="col-md-3 w3agile_blog_left">
						<div className="wthreesearch">
									<form action="#" method="post">
										<input type="search" name="Search" placeholder="Search here" required=""/>
										<button type="submit" className="btn btn-default search" aria-label="Left Align">
											<i className="fa fa-search" aria-hidden="true"></i>
										</button>
									</form>
								
						</div>
						
						<div className="agileinfo_calender">
						<h3>CONNECT SOCIALLY</h3>
						<div className="w3ls-social-icons-1">
							<a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
							<a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
							<a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a>
							<a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
							<a className="linkedin" href="#"><i className="fa fa-google-plus"></i></a>
							<a className="linkedin" href="#"><i className="fa fa-rss"></i></a>
							<a className="linkedin" href="#"><i className="fa fa-behance"></i></a>
						</div>
						</div>
						<div className="w3ls_popular_posts">
							<h3>Popular Posts</h3>
							<div className="agileits_popular_posts_grid">
								<div className="w3agile_special_deals_grid_left_grid">
									<a href="singlepage.html"><img src={require("../src/images/p1.jpg")} className="img-responsive" alt="" /></a>
								</div>
								<h4><a href="singlepage.html">Tellus Faucibus Eleifend Sit Amet</a></h4>
								<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
							</div>
							<div className="agileits_popular_posts_grid">
								<div className="w3agile_special_deals_grid_left_grid">
										<a href="singlepage.html"><img src={require("../src/images/p2.jpg")} className="img-responsive" alt="" /></a>
									</div>
								<h4><a href="singlepage.html">Mauris Ut Odio Sed Nisi Convallis</a></h4>
								<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
							</div>
							<div className="agileits_popular_posts_grid">
								<div className="w3agile_special_deals_grid_left_grid">
										<a href="singlepage.html"><img src={require("../src/images/p3.jpg")} className="img-responsive" alt="" /></a>
								</div>
								<h4><a href="singlepage.html">Curabitur A Sapien Et Tellus Faucibus</a></h4>
								<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
							</div>
						</div>
						
						<div className="w3l_categories">
							<h3>Categories</h3>
							<ul>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>tellus faucibus eleifend sit amet</a></li>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Mauris ut odio sed nisi convallis</a></li>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Curabitur a sapien et tellus faucibus</a></li>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>porta nunc eget, lobortis nulla</a></li>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Sed ut metus turpis cursus convallis</a></li>
								<li><a href="singlepage.html"><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>Maecenas cursus at ex a faucibus</a></li>
							</ul>
						</div>
					<div className="w3ls_recent_posts">
							<h3>Recent Posts</h3>
							<div className="agileits_recent_posts_grid">
								<div className="agileits_recent_posts_gridl">
									<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/r1.jpg")} className="img-responsive" alt="" /></a>
										</div>
								</div>
								<div className="agileits_recent_posts_gridr">
									<h4><a href="singlepage.html">velit esse quam nihil</a></h4>
									<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="agileits_recent_posts_grid">
								<div className="agileits_recent_posts_gridl">
									<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/r2.jpg")} className="img-responsive" alt="" /></a>
										</div>
								</div>
								<div className="agileits_recent_posts_gridr">
									<h4><a href="singlepage.html">Class aptent taciti </a></h4>
									<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="agileits_recent_posts_grid">
								<div className="agileits_recent_posts_gridl">
									<div className="w3agile_special_deals_grid_left_grid">
											<a href="singlepage.html"><img src={require("../src/images/r3.jpg")} className="img-responsive" alt="" /></a>
										</div>
								</div>
								<div className="agileits_recent_posts_gridr">
									<h4><a href="singlepage.html">Maecenas eget erat </a></h4>
									<h5><i className="fa fa-calendar" aria-hidden="true"></i>FEB 15,2017</h5>
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
					<div className="w3l_tags">
							<h3>Tags</h3>
							<ul className="tag">
								<li><a href="singlepage.html">Fashion</a></li>
								<li><a href="singlepage.html">Photography</a></li>
								<li><a href="singlepage.html">Artist</a></li>
								<li><a href="singlepage.html">Music</a></li>
								<li><a href="singlepage.html">Shop</a></li>
								<li><a href="singlepage.html">Corporate</a></li>
								<li><a href="singlepage.html">Personal</a></li>
								<li><a href="singlepage.html">Restaurant</a></li>
								<li><a href="singlepage.html">Business</a></li>
							</ul>
						</div>
					</div>
					
					<div className="clearfix"></div>
				</div>
			</div>
         </div>
      )
   }
}

export default Home;
