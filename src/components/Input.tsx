type InputProps = {
  inputValue: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  return (
    <div>
      <input value={props.inputValue} onChange={props.onChangeValue} type="text" />
    </div>
  );
};

export default Input;
