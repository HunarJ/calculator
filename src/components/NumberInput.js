const NumberInput = (props) => {
    const { name, label, value } = props;
    return (
        <label htmlFor={name}>
            {label}
            <input 
            onChange={props.onChange}
            id={name}
            value={value}
            type="number"
            name={name}
            required
             />
        </label>
    )
}

export default NumberInput;