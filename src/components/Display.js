import React from "react";
import "./style.css";

class Display extends React.Component {
  render() {
    return <input type="text" className="display" value={this.props.value} />;
  }
}

export default Display;