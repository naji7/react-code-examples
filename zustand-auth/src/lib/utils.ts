import { AxiosError } from "axios";

export function handleAxiosError(
  error: unknown,
  fallbackMessage = "Something went wrong"
): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || fallbackMessage;
  }
  return fallbackMessage;
}
