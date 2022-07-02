import "./Menu.css";
import React from "react";
import {Home} from "../Home"
import {About} from "../About"
import {Contact} from "../Contact"
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
function template() {
  const {menuItem,isMobileView,left}=this.state
  return (
    <div >
     <div className="menu">
                {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>menu</button>}
                <ul style={{left}} className={`${isMobileView && 'mobile-menu'} menu`} onClick={this.fnMenuClick}>
                    <li >
                      <a className={menuItem == 'home' && 'menu-active'} id='home' href="#/Home">Home</a>
                      </li>
                    <li >
                      <a className={menuItem == 'about' && 'menu-active'} id='about'  href="#/About">About</a>
                    </li>
                    <li >
                      <a className={menuItem == 'contact' && 'menu-active'} id='contact' href="#/Contact">Contact</a>
                      </li>
                </ul>
                 

                
                </div>
                <HashRouter>
                    <Routes>
                      <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Navigate to ="/home"/>}/>
                    </Routes>
                  </HashRouter>
    </div>
  );
};

export default template;
