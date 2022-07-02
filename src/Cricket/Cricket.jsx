import "./Cricket.css";
import React from "react";
import {HeaderCricket} from '../HeaderCricket'
import { FooterCricket } from "../FooterCricket";
import MenuCricket from '../MenuCricket'

function template() {
  return (
    <div className="cricket">
      <HeaderCricket/>
      <MenuCricket/>
      <FooterCricket/>
    </div>
  );
};

export default template;
