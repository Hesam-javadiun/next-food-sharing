"use client";

import { useFormState } from "react-dom";
import Image from "next/image";
import { inputs } from "../UI";
import classes from "./authentication-form.module.css";
import loginLogo from "@/public/images/login-logo.png";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { authAction } from "@/lib/actions";

export type AuthFormState = {
  errors: { [errorName: string]: string } | null;
};

const AuthenticationForm = function () {
  const searchParams = useSearchParams();
  const isLogin = isLoginMode(validateAndGetMode(searchParams));

  const [state, action] = useFormState<AuthFormState>(
    // @ts-ignore
    authAction.bind(null, isLogin),
    { errors: null }
  );
  console.log('state', state);
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
        {!isLogin && (
          <li>
            <label htmlFor="repeat-password">Repeat Password:</label>
            <inputs.input name="repeat-password"></inputs.input>
          </li>
        )}
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

        <button type="submit">
          {isLogin ? "Log in" : "Create an account"}
        </button>
        <Link href={isLogin ? "auth/?mode=signup" : "auth/?mode=login"}>
          {isLogin ? "Create an account" : "Log in with existing account"}
        </Link>
      </ul>
    </form>
  );
};

export default AuthenticationForm;

const validateAndGetMode = (searchParams: ReadonlyURLSearchParams) => {
  if (isEmpty(searchParams)) {
    return "login";
  }

  if (!isModeExist(searchParams)) {
    notFound();
  }

  const mode = searchParams.get("mode") as string;
  if (!isValidMode(mode)) {
    notFound();
  }

  return mode;
};

const isModeExist = (searchParams: ReadonlyURLSearchParams) =>
  searchParams.has("mode") && searchParams.size === 1;

const isEmpty = (searchParams: ReadonlyURLSearchParams) => {
  return searchParams.size === 0;
};

const isValidMode = (mode: string) => {
  return isLoginMode(mode) || isSignupMode(mode);
};

const isLoginMode = (mode: unknown) => mode === "login";
const isSignupMode = (mode: string) => mode === "signup";
