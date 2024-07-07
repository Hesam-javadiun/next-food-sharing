"use server";

import { type AuthFormState as AuthFormStateType } from "@/components/authentication-form";
import {
  createUser,
  getUserByEmail,
  type User as UserType,
} from "@/lib/data-base";
import { createAuthSession } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { hash, validation } from "@/utility";
import { error } from "console";

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

async function singUp(prevState: AuthFormStateType, formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;
  
  let errors: { [errorName: string]: string } = {};
  validateEmail(errors, email);
  validatePassword(errors, password);

  try {
    const hashedPassword = hash.hashUserPassword(password);
    const id = createUser(email, hashedPassword);
    await createAuthSession(id.toString());
  } catch (error) {
    if (isErrorThrownFromDatabase(error)) {
      errors.email =
        "It seems like an account for the chosen email already exists.";
    } else {
      throw error;
    }
  } finally {
    if (Object.keys(errors).length > 0) {
      return {
        errors,
      };
    }

    redirect("/");
  }
}

function login(prevState: AuthFormStateType, formData: FormData) {}

const validateEmail = validation.generateValidation({
  isValid: (email) => email.includes("@"),
  code: "email",
  message: "Please enter a valid email address.",
});

const validatePassword = validation.generateValidation({
  isValid: (password) => password.trim().length >= 8,
  code: "password",
  message: "Password must be at least 8 characters long.",
});

// const isErrorObjectEmpty = validation.generateValidation({
//   isValid: (errorObj) => Object.keys(errorObj).length > 0,

// })

function isErrorThrownFromDatabase(error: unknown) {
  //@ts-ignore
  return error.code === "SQLITE_CONSTRAINT_UNIQUE";
}
