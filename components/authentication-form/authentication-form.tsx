"use client";

import Image from "next/image";
import { inputs } from "../UI";
import classes from "./authentication-form.module.css";
import loginLogo from "@/public/images/login-logo.png";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

const AuthenticationForm = function () {
  const searchParams = useSearchParams();
  const isLogin = isLoginMode(validateAndGetMode(searchParams));

  return (
    <form className={classes.form}>
      <ul>
        <Image
          src={loginLogo.src}
          alt={"login logo"}
          width={100}
          height={100}
          priority
        />
        <li>
          <label htmlFor="user-name">Username:</label>
          <inputs.input name="user-name"></inputs.input>
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <inputs.input name="password"></inputs.input>
        </li>
        {!isLogin && <li>
          <label htmlFor="repeat-password">Repeat Password:</label>
          <inputs.input name="repeat-password"></inputs.input>
        </li>}
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
