// import classes from "./styles.module.css";
import type { ComponentPropsWithoutRef } from "react";

type InputTagProps = ComponentPropsWithoutRef<"input"> & {
  as: "input";
  label: string;
};

type TextareaTagProps = ComponentPropsWithoutRef<"textarea"> & {
  as: "textarea";
  label: string;
};

type InputProps = InputTagProps | TextareaTagProps;
//toDo
//adjust it based on the forms need
//add tailwind
//add label
//add as prop make it compatible for input and textarea

function isTextarea(
  componentProps: InputProps
): componentProps is TextareaTagProps {
  if (componentProps.as === "textarea") {
    return true;
  }

  return false;
}

const Input = function (props: InputProps) {
  if (isTextarea(props)) {
    const { as: TextareaComponent, label, ...attributes } = props;
    return (
      <>
        <label htmlFor={attributes.name}>{label}</label>
        <TextareaComponent
          {...attributes}
          name={attributes.name}
          className={`${attributes.className}`}
        />
      </>
    );
  }

  const { as: InputComponent, label, ...attributes } = props;
  return (
    <>
      <label htmlFor={attributes.name}>{label}</label>
      <InputComponent {...attributes} className={`${attributes.className}`} />
    </>
  );
};

export default Input;
