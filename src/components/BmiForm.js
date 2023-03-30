import React, { useState } from "react";
import BmiPlot from "../components/BmiPlot";

const calcBMI = (weight, height) => {
    return (weight/(height/100)**2).toFixed(2)
}

export default function BmiForm() {
    const [height, setHeight] = useState('0');
    const [weight, setWeight] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert([height, weight]);
    }

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <label>Weight in kg:
                <br />
                <input 
                    className="my-2"
                    type="number"
                    name="weight"
                    placeholder="weight in kg"         
                    onChange={e => setWeight(e.target.value)}
                />
                </label>
                <br />
                <label>Height in cm
                <br />
                <input 
                    className="my-2"
                    type="number"
                    name="height"
                    placeholder="height in cm"
                    onChange={e => setHeight(e.target.value)}
                />
                </label>
                <br />
                <input className="rounded mt-2" type="submit" value="Calculate BMI"/>
                <br />  
            </form>
            <hr />
            {height !== '' && weight !== '' && parseInt(height) > 0 && parseInt(weight) > 0 &&
                <p>Your BMI is {calcBMI(parseInt(weight), parseInt(height))}.</p>
            }
            <BmiPlot w={weight} h={height}/>
        </div>
    )
}
