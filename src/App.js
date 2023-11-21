import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("00.00");

  function handleResult() {
    const heightInMeters = height / 100;
    const calcBmi = parseFloat(
      weight / (heightInMeters * heightInMeters)
    ).toFixed(2);
    // console.log(calcBmi)
    setBmi(calcBmi);
  }

  return (
    <div className="container">
      <div className="box">
        <h1>BMI Calculator</h1>

        <div className="content">
          <div className="containerHw">
            <div className="inputH">
              <label htmlFor="">Height(cm)</label>
              <input
                type="text"
                name=""
                id=""
                value={height}
                onChange={(e) => Number(setHeight(e.target.value))}
              />
            </div>

            <div className="inputW">
              <label htmlFor="">Weight(kg)</label>
              <input
                type="text"
                name=""
                id=""
                value={weight}
                onChange={(e) => Number(setWeight(e.target.value))}
              />
            </div>
          </div>

          <button className="calculate" onClick={handleResult}>
            Calculate BMI
          </button>
        </div>

        <div className="result">
          <p>Your BMI is</p>
          <div id="result">{bmi}</div>
          <p className={bmi > 0 ? "comment" : ""} id="comment">
            {bmi > 0 && bmi < 18.5
              ? "Underweight"
              : bmi >= 18.5 && bmi <= 24.9
              ? "Normal weight"
              : bmi >= 25 && bmi <= 29.9
              ? "Overweight"
              : bmi >= 30
              ? "Obese"
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
