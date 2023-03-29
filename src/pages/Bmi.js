import React from "react";

let calcBMI =(weight, height) => {
  // prevent submitting event. prevent Default{}
    if (weight===0 || height===0) {
      alert ("please enter a valid weight and height")
      
    }
  else{
    return (weight/(height/100)**2).toFixed(2)
    
  }
}


export default function Bmi() {
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>Height (in cm)</p>
      <input type="text" placeholder="Height in cm"/>
      <p>Weight (in Kg)</p>
      <input type="text" placeholder="Weight in kg"/>
      <p></p>
    </div>
  )
}
