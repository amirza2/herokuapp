import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';
import "./css/font-awesome.min.scss";
import "./css/bootstrap.min.scss";
import "./css/style.scss";
import "./css/flexslider.scss";
import "./js/move-top.js";
import "./js/easing.js";
import "./js/bootstrap.js";
import "./js/jquery.flexslider.js";
import "./js/skdslider.min.js";
import "./css/skdslider.scss";
import "./css/smoothbox.scss";

class Master extends React.Component {

componentWillMount(){
	addEventListener("load", function() 
	{ 
	setTimeout(hideURLbar, 0); }, false);
	 function hideURLbar(){ window.scrollTo(0,1);
	  }
}
   render() {
      return (
         <div>
          <Header></Header>
           {this.props.children} 
           <Footer></Footer>
         </div>
      );
   }
}

export default Master;