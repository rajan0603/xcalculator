import React from "react";
import "./style.css";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends React.Component {
  state = {
    displayValue: "",
    isResult:false,
  };

  handleClick = (value) => {
    if(value === "="){
        this.calculate();
    }
    else if(value === "C"){
        this.reset();
    }
    else{
        this.setState((prevState) => ({
            displayValue: prevState.displayValue + value,
        }));
    }
    
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.displayValue.includes('--')) {
      checkResult = this.state.displayValue.replace('--', '+')
    } else {
      checkResult = this.state.displayValue;
    }

    try {
        if(checkResult === "0/0"){
            this.setState({
                displayValue: "NaN",
                isResult: true,
            })
        }
        else if(checkResult === ""){
            this.setState({
                displayValue: "Error",
                isResult: true,
            })
        }
        else{
            this.setState({
                displayValue: (eval(checkResult) || "") + "",
                isResult: true,
            })
        }
    } catch(e) {
        this.setState({
            displayValue: "error"
        })
    }
  };

  reset = () => {
    this.setState({
        displayValue: ""
    })
  };

  render() {
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <Display value={this.state.displayValue} />
        {this.state.isResult && <p>{this.state.displayValue}</p>}
        <Keypad onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;