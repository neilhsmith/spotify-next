export async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

async function get<TResponse>(
  url: string,
  headers?: HeadersInit
): Promise<TResponse> {
  return request<TResponse>(url, { headers });
}

async function post<TResponse>(
  url: string,
  headers?: HeadersInit,
  body?: Record<string, unknown>
): Promise<TResponse> {
  return request<TResponse>(url, {
    method: "POST",
    ...(headers ? { headers } : {}),
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}

export const api = {
  get,
  post,
  request,
};
