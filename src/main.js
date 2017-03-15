import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import App from "./App.jsx";
import Contact from "./contact.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Master from "./master.jsx";

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path = "/" component = {Master}>
      <IndexRoute component={Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route> 
      
         
         
      
   </Router>
	
), document.getElementById('app'))