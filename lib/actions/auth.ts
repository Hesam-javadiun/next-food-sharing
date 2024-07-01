"use server";
import type { AuthFormState } from "@/components/authentication-form";
// import { redirect } from "next/navigation";

// import { hashUserPassword } from "@/lib/hash";
// import { createUser } from "@/lib/user";

export async function authAction(
  isLoginMode: boolean,
  prevState: AuthFormState,
  formData: FormData
) {
  if (isLoginMode) {
    return login(prevState, formData);
  }
  return singUp(prevState, formData);
}

async function singUp(prevState: AuthFormState, formData: FormData) {
  

  // createUser(email, password);
}

async function login(prevState: AuthFormState, formData: FormData) {
  const email = formData.get("email")! as string;
  const password = formData.get("password")! as string;

  let errors: { [errorName: string]: string } = {};
  
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
}
