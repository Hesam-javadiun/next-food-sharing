import AuthenticationForm from "@/src/components/authentication-form";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { notFound, useSearchParams } from "next/navigation";

export const enum AuthModes {
  LOGIN = 'login',
  SIGN_UP = 'signUp'
}

const AuthenticationPage = function () {
  const searchParams = useSearchParams();
  const mode = validateAndGetMode(searchParams)

  return (
      <AuthenticationForm mode={mode}  />
  );
};

export default AuthenticationPage;

const validateAndGetMode = (searchParams: ReadonlyURLSearchParams) => {
  if (isEmpty(searchParams)) {
    return AuthModes.LOGIN;
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
  return isLoginMode(mode) || isSignUpMode(mode);
};

const isLoginMode = (mode: unknown) => mode === AuthModes.LOGIN;
const isSignUpMode = (mode: string) => mode === AuthModes.SIGN_UP;
