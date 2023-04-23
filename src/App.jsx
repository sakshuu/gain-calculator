import React, { useState } from 'react'

const App = () => {
   const [initialValue, setInitialValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [gain, setGain] = useState(0);

  const handleCalculate = () => {
    const difference = finalValue - initialValue;
    const ratio = difference / initialValue;
    const gainPercentage = ratio * 100;
    setGain(gainPercentage);
  };
  return <>
  <div>
      <h2>Gain Calculator</h2>
      <label htmlFor="initialValue">Initial Value:</label>
      <input
        type="number"
        id="initialValue"
        value={initialValue}
        onChange={(e) => setInitialValue(parseFloat(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="finalValue">Final Value:</label>
      <input
        type="number"
        id="finalValue"
        value={finalValue}
        onChange={(e) => setFinalValue(parseFloat(e.target.value))}
      />
            <br />
            <br />
      <button onClick={handleCalculate}>Calculate Gain</button>
      {gain > 0 && <p>Gain: {gain.toFixed(2)}%</p>}
    </div>

  </>
}

export default App