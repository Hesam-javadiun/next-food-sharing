"use server";
import { type AuthFormState as AuthFormStateType } from "@/components/authentication-form";
import {
  createUser,
  getUserByEmail,
  type User as UserType,
} from "@/lib/data-base";
import { redirect } from "next/navigation";
import { hash } from "@/utility";

type Credentials = {
  email: string;
  password: string;
};

export async function authenticate(
  isLoginMode: boolean,
  prevState: AuthFormStateType,
  formData: FormData
) {
  if (isLoginMode) {
    return login(prevState, formData);
  }

  return singUp(prevState, formData);

  // const email = formData.get("email")! as string;
  // const password = formData.get("password")! as string;

  // try {
  //   if (isLoginMode) {
  //     login({ email, password });
  //   } else {
  //     singUp({ email, password });
  //   }
  // } catch (error: unknown) {
  //   const errorState = handleError(error);
  //   return errorState ?? { unknown: "unhandled error!" };
  // }

  // redirect("/");
}

function singUp(prevState: AuthFormStateType, formData: FormData) {

  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;
  
  try {
    validateCredentials({ email, password });
    const hashedPassword = hash.hashUserPassword(password);

    createUser(email, hashedPassword);
  }catch(error){
    const errorState = handleError(error);
    return errorState ?? {unknown: 'unhandled error'}
  }
  // checkForEmailDuplication(email);


}

function login({ email, password: enteredPassword }: Credentials) {
  const user = getUserByEmail(email) as UserType;
  if (user) {
    throwError({ isNotExist: "email is not exist" });
  }

  const isEmailVerified = hash.verifyPassword(enteredPassword, user.password);

  if (!isEmailVerified) {
    throwError({ passwordDoesNotMatch: "the entered password is not correct" });
  }
}

function checkForEmailDuplication(email: string) {
  const foundedEmail = getUserByEmail(email);
  if (foundedEmail) {
    throwError({ isEmailExist: "this email is already taken" });
  }
}

function validateCredentials({ email, password }: Credentials) {
  let errors: { [errorName: string]: string } = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    throwError(errors);
  }
}

function throwError(errorObject: { [keyName: string]: string }) {
  const error = new Error();
  error.cause = {
    errors: errorObject,
    isFromCredential: true,
  };
  throw error;
}

function handleError(error: unknown) {
  console.error("error", error);
  if (!(error instanceof Error)) {
    return null;
  }

  if (!("cause" in error)) {
    return null;
  }

  if (error?.cause?.isFromCredential) {
    return {
      errors: error.cause.errors ?? {
        unknown: "credential problem not handled",
      },
    };
  }

  return null;
}
