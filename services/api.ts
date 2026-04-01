const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
};

export const api = async <T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  if (!BASE_URL) {
    throw new Error(
      "Missing API_BASE_URL or NEXT_PUBLIC_API_BASE_URL environment variable"
    );
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (process.env.NEXT_PUBLIC_API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || `HTTP ${res.status}`);
  }

  return res.json();
};
