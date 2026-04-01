const BASE_URL = "https://api-dev.ziyadbooks.com/api/v1";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
};

export const api = async <T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || `HTTP ${res.status}`);
  }

  return res.json();
};