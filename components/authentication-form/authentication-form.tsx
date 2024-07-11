"use client";

import { authenticate } from "@/actions";
import loginLogo from "@/public/images/login-logo.png";
import Image from "next/image";
import Link from "next/link";

import { useFormState } from "react-dom";
import { inputs } from "../UI";
import classes from "./authentication-form.module.css";
import SubmitButtonAndNavigationLink from "./submit-button";
import { AuthModes } from "@/app/(authentication)/auth/page";

export type AuthFormState = {
  errors: { [errorName: string]: string } | null;
};

type AuthenticationFormProps = {
  mode: AuthModes;
};

const isLoginMode = (mode: string) => mode === AuthModes.LOGIN;

const AuthenticationForm = function ({ mode }: AuthenticationFormProps) {
  const isLogin = isLoginMode(mode);
  const [state, action] = useFormState<AuthFormState>(
    // @ts-ignore
    authenticate.bind(null, isLogin),
    { errors: null }
  );

  return (
    <form className={classes.form} action={action}>
      <ul className={classes.inputs}>
        <Image
          src={loginLogo.src}
          alt={"login logo"}
          width={100}
          height={100}
          priority
        />
        <li>
          <label htmlFor="email">Email:</label>
          <inputs.input name="email"></inputs.input>
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <inputs.input name="password"></inputs.input>
        </li>
        {state.errors && (
          <ul className={classes.error}>
            {Object.entries(state.errors as object).map(
              ([error, errorMessage]) => (
                <li key={error}>
                  <p>{errorMessage}</p>
                </li>
              )
            )}
          </ul>
        )}
        <SubmitButtonAndNavigationLink
          buttonText={isLogin ? "Log in" : "Create an account"}
          linkText={
            isLogin ? "Create an account" : "Log in with existing account"
          }
          href={
            isLogin
              ? `auth/?mode=${AuthModes.SIGN_UP}`
              : `auth/?mode=${AuthModes.LOGIN}`
          }
        />
      </ul>
    </form>
  );
};

export default AuthenticationForm;
