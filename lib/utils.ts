import { Classification, ResponseText } from "models/response_text";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sampleResponse: ResponseText = {
  uid: "mypher89002",
  inputText: "",
  sentences: [],
  overAllLabel: Classification.AI,
  overallScore: 0
}

export const API_SERVER_BASE = "https://biggest-stronger-dedicated-producers.trycloudflare.com/";
export const CLASSIFY_API_ENDPOINT = `${API_SERVER_BASE}classify`;

