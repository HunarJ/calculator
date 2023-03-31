import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";
import { useState } from "react";
import { calculate, options } from "../utils/calculate";

const CalculatorForm = (props) => {
  const { x, y } = props;
  const [selectedOptionState, setSelectedOptionState] = useState({
    value: "--Vyberte operaci--",
    label: "--Vyberte operaci--",
  });
  const [resultState, setResultState] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let result = calculate(x, y, selectedOptionState.value);
    setResultState(result);
    console.log(selectedOptionState.value);
  };

  const handleChange = (selectedOptionState) => {
    setSelectedOptionState(selectedOptionState);
  };

  return (
    <div>
      <form className="CalculatorForm" onSubmit={handleSubmit}>
        <NumberInput
          onChange={props.xOnChange}
          name="x"
          label="První číslo:"
          value={props.x}
        />
        <NumberInput
          onChange={props.yOnChange}
          name="y"
          label="Druhé číslo:"
          value={props.y}
        />
        <Select
          onChange={handleChange}
          value={selectedOptionState}
          options={options}
        />
        <input value="Spočítej" type="submit" />
      </form>
      <Result value={resultState} />
    </div>
  );
};

export default CalculatorForm;
