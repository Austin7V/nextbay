"use server";

import { cookies } from "next/headers";

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
    const errorText = await response.text();
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
}

export async function registerAction() {}
export async function logoutActions() {}
