
import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './componant/header';
import Home from "./componant/Home";
import PangongLake from "./componant/ladakh/pangongLake";
// import ladakh from "./componant/ladakh";
import Ladakh from "./componant/ladakh/ladakh";
// import manali from "./componant/manali";
import Manali from "./componant/manali/manali";
import Footer from "./componant/footer";
import Login from "./componant/login";

function App() {
  return (
    <React.Fragment>
      
      <Header/>
      
      
      {/* here default */}
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/header" component={Header} exact /> */}
        <Route path = "/pangongLake" component={PangongLake} exact />
        <Route path = "/ladakh" component={Ladakh} exact />
        <Route path = "/manali" component={Manali} exact />
        <Route path ="/login" component={Login} exact/>
        {/* <Route path = "/footer" component={footer} exact/> */}
        

      </Switch>


      
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;
