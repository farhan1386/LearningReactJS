const BASE_URL = "https://typicode.com";

export const apiClient = async (endpoint, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error(`API Network Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
