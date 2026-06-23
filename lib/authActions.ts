"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darkbay api URL is not defined");
  }

  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();

  const cookieStore = await cookies();

  cookieStore.set("darkbay_token", data.access_token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });

  redirect("/");
}

export async function registerAction() {}
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("darkbay_token");

  redirect("/login");
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("darkbay_token");
  return Boolean(token);
}
