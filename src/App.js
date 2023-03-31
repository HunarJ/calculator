import './App.css';
import CalculatorForm from './components/CalculatorForm';
import { useState } from 'react';

const title = 'React kalkulačka';

function App() {
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);

  const inputXonchange = (event) => {
    console.log(event.target.value);
    setXState(event.target.value);
  }

  const inputYonchange = (event) => {
    console.log(event.target.value);
    setYState(event.target.value);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <CalculatorForm 
      xOnChange={inputXonchange}
      yOnChange={inputYonchange}
      x={xState}
      y={yState}
      />
    </div>
  );
}

export default App;
