import classes from "./styles.module.css";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  name?: string;
};

const Input = function (props: InputProps) {
  const adjustedProps = {
    ...props,
    className: `${classes["text-field"]} ${props.className}`,
  };
  return <input {...adjustedProps} />;
};

export default Input;
