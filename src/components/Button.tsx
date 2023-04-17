type ButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = (props: ButtonProp) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default Button;
