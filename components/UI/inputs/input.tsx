import classes from "./styles.module.css";

type InputProps = Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> & {
  name?: string;
};

const Input = function (props: InputProps) {
  const adjustedProps = {
    ...props,
    className: `${classes['text-field']} ${props.className}`,
  };
  return <input {...adjustedProps} type='text' />;
};

export default Input;
