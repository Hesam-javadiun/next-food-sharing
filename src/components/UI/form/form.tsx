"use client";
import { ReactNode } from "react";
import { useFormState } from "react-dom";
import type { ComponentPropsWithoutRef } from "react";

type State = {
  message: string | null;
};

export type ActionFunctionType = (
  pervState: State,
  formData: FormData
) => Promise<State>;

type FormProps = {
  action: ActionFunctionType;
  initialState: State;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"form">, "action">;

const Form = function ({
  action,
  initialState,
  children,
  ...attributes
}: FormProps) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction} {...attributes} >
      {children}
      <div>{state.message && <p>{state.message}</p>}</div>
    </form>
  );
};

export default Form;
