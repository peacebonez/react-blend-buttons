import React from "react";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import BlendButton from "./BlendButton";

console.log(<FaBeer /> + " hey");

function App() {
  return (
    <div className="App">
      <div className="wrapper one">
        <BlendButton btnText={"Handles no background"} fontSize={"18px"} />
      </div>
      <div className="wrapper two">
        <BlendButton
          btnText={"Parent background-color declared"}
          colorMain={"#FC766AFF"}
          borderRadius={"10px"}
          fontSize={"16px"}
        />
      </div>
      <div className="wrapper three">
        <BlendButton
          btnText={<FaBeer />}
          colorMain={"#FEE715FF"}
          borderRadius={"10px"}
          fontSize={"32px"}
        />
      </div>
      <div className="wrapper four">
        <div className="box2">
          <BlendButton
            btnText={"Submit"}
            colorMain={"orange"}
            borderRadius={"20px"}
          />
        </div>
      </div>
      <div className="wrapper five">
        <BlendButton
          btnText={"Multiple buttons..."}
          colorMain={"#fff"}
          fontSize={"16px"}
        />
        <BlendButton
          btnText={"in same parent"}
          colorMain={"#fff"}
          fontSize={"16px"}
        />
      </div>
    </div>
  );
}

export default App;