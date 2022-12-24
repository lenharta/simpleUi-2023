type ButtonPropsType = {
  id?: string;
  text?: string;
  type?: "reset" | "submit" | "button";
  value?: string | number;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  id = "",
  text = "Button Text",
  type = "button",
  value = "",
  onClick = () => console.log("You clicked a button!"),
  disabled = false,
}: ButtonPropsType) => {
  return (
    <button
      id={id}
      type={type}
      value={value}
      onClick={onClick}
      className="Button"
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
