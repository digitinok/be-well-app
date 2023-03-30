import React from "react";
import BmiForm from "../components/BmiForm";
/*
let calcBMI =(weight, height) => {
  // prevent submitting event. prevent Default{}
    if (weight===0 || height===0) {
      alert ("please enter a valid weight and height")
      
    }
  else{
    return (weight/(height/100)**2).toFixed(2)
    
  }
}
*/

export default function Bmi() {
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p></p>
      <BmiForm />
    </div>
  )
}
