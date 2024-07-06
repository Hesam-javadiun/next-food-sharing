"use server";
import { type AuthFormState as AuthFormStateType } from "@/components/authentication-form";
import {
  createUser,
  getUserByEmail,
  type User as UserType,
} from "@/lib/data-base";
import { redirect } from "next/navigation";
import { hash, validation } from "@/utility";

export async function authenticate(
  isLoginMode: boolean,
  prevState: AuthFormStateType,
  formData: FormData
) {
  if (isLoginMode) {
    return login(prevState, formData);
  }

  return singUp(prevState, formData);
}

function singUp(prevState: AuthFormStateType, formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;

  let errors: { [errorName: string]: string } = {};
  try {
    validateEmail(errors, email);
    validatePassword(errors, password);
    const hashedPassword = hash.hashUserPassword(password);
    createUser(email, hashedPassword);
  } catch (error) {

    if (isErrorThrownFromDatabase(error)) {
      errors.email =
        "It seems like an account for the chosen email already exists.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        errors,
      };
    } else {
      throw error;
    }
  }
}

function login(prevState: AuthFormStateType, formData: FormData) {

}

const validateEmail = validation.generateValidation({
  code: "email",
  validator: (email) => !email.includes("@"),
  message: "Please enter a valid email address.",
});

const validatePassword = validation.generateValidation({
  code: "email",
  validator: (password) => password.trim().length < 8,
  message: "Password must be at least 8 characters long.",
});

function isErrorThrownFromDatabase(error: unknown) {
  //@ts-ignore
  return error.code === "SQLITE_CONSTRAINT_UNIQUE";
}


