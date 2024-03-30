import classes from "./styles.module.css";

type TextareaProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

const Textarea = function (props: TextareaProps) {
  const adjustedProps = {
    ...props,
    className: `${classes["text-field"]} ${props.className}`,
  };

  return <textarea {...adjustedProps}></textarea>;
};

export default Textarea;
