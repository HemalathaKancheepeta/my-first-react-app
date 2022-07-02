import "./MenuCricket.css";
import React from "react";
import { India } from "../India";
import { Australia } from "../Australia";
import { Srilanka } from "../Srilanka";
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'

function template() {
  const {menuItem,isMobileView,left}=this.state
  return (
    
    <div className="menu-cricket">
      <div className="menu">
                {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>menu</button>}
                <ul style={{left}} className={`${isMobileView && 'mobile-menu'} menu`} onClick={this.fnMenuClick}>
                    <li >
                      <a className={menuItem == 'india' && 'menu-active'} id='india' href="#/India">India</a>
                      </li>
                    <li >
                      <a className={menuItem == 'australia' && 'menu-active'} id='australia'  href="#/Australia">Australia</a>
                    </li>
                    <li >
                      <a className={menuItem == 'srilanka' && 'menu-active'} id='srilanka' href="#/Srilanka">Srilanka</a>
                      </li>
                </ul>
                 

                
                </div>
                <HashRouter>
                    <Routes>
                      <Route path="/india" element={<India/>}/>
                        <Route path="/australia" element={<Australia/>}/>
                        <Route path="/srilanka" element={<Srilanka/>}/>
                        <Route path="*" element={<Navigate to ="/india"/>}/>
                    </Routes>
                  </HashRouter>
    </div>
  );
};

export default template;
