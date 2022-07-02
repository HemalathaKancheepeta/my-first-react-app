import "./Webpage.css";
import React from "react";
import Header from "../Header/Header"
import { Footer } from "../Footer";
import Menu from "../Menu/Menu";


function template() {
  return (
    <div className="webpage">
      <Header/>
      <Menu/>
      <Footer/>
      
    </div>
  );
};

export default template;
