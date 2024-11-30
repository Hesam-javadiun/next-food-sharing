"use client";
import { ReactNode } from "react";
import { useFormState } from "react-dom";

type State = {
  message: string | null;
};

type FormProps = {
  action: (pervState: State, formData: FormData) => Promise<State>;
  initialState: State;
  children: ReactNode;
};

const Form = function ({ action, initialState, children }: FormProps) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction}>
      {children}
      <div>{state.message && <p>{state.message}</p>}</div>
    </form>
  );
};

export default Form;
