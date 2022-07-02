import React    from "react";
import template from "./Webpage.jsx";


class Webpage extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Webpage;
