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
  onClick,
  disabled = false,
}: ButtonPropsType) => {
  return (
    <button
      id={id}
      type={type}
      value={value}
      onClick={onClick}
      className="text-size-0 Button"
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
