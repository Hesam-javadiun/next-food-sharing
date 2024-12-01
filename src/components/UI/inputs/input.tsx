// import classes from "./styles.module.css";
import type { ComponentPropsWithoutRef } from "react";
import { Typography } from "@/src/components/UI";

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
  const labelClass =
    "text-zinc-400 all-small-caps font-bold font-sans text-[0.9em]";

  const inputClass = "bg-zinc-800 border border-gray-500 border-solid rounded text-zinc-100";

  const containerClass = "flex flex-col w-full";
  if (isTextarea(props)) {
    const { as: TextareaComponent, label, ...attributes } = props;
    return (
      <div className={containerClass}>
        <Typography htmlFor={attributes.name} as="label" className={labelClass}>
          {label}
        </Typography>
        <TextareaComponent
          {...attributes}
          name={attributes.name}
          className={`${attributes.className} ${inputClass}`}
        />
      </div>
    );
  }

  const { as: InputComponent, label, ...attributes } = props;
  return (
    <div className={containerClass}>
      <Typography htmlFor={attributes.name} as="label" className={labelClass}>
        {label}
      </Typography>
      <InputComponent
        {...attributes}
        className={`${attributes.className} ${inputClass}`}
      />
    </div>
  );
};

export default Input;
