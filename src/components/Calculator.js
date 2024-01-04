import React, {useState} from "react";
import "./style.css";
import Display from "./Display";
import Keypad from "./Keypad";

function Calculator() {
    const [displayValue, setDisplayValue] = useState("");
    const [isResult, setIsResult] = useState(false);

  const handleClick = (value) => {
    if(value === "="){
        calculate();
    }
    else if(value === "C"){
        reset();
    }
    else{
        setDisplayValue((prevDisplayValue) => (prevDisplayValue + value));
    }
    
  };

  const calculate = () => {
    var checkResult = ''
    if(displayValue.includes('--')) {
      checkResult = displayValue.replace('--', '+')
    } else {
      checkResult = displayValue;
    }

    try {
        if(checkResult === "0/0"){
            setDisplayValue("NaN");
            setIsResult(true);
        }
        else if(checkResult === ""){
            setDisplayValue("Error");
            setIsResult(true);
        }
        else{
            setDisplayValue((eval(checkResult) || "") + "");
            setIsResult(true);
        }
    } catch(e) {
        setDisplayValue("error");
    }
  };

  const reset = () => {
    setDisplayValue("");
    setIsResult(false);
  };

    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <Display value={displayValue} />
        {isResult && <p>{displayValue}</p>}
        <Keypad onClick={handleClick} />
      </div>
    )
    }

export default Calculator;