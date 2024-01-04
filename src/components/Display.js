import React from "react";
import "./style.css";

function Display(props){
    return <input type="text" className="display" value={props.value} />;
}

export default Display;