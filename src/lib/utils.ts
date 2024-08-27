import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "https://app.xeurix.com/api/";
