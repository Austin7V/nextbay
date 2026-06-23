import { cookies } from "next/headers";

export async function fetchApi(path: string, options: Requestinit = {}) {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darkbay api Url is not defined");
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("darkbay_token")?.value;
  const headers = new Headers(options.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(`${apiUrl}${path}`, {
    ...options,
    headers,
  });
}
