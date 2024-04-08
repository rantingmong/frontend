import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number | string) {
  return formatterNumber.format(Number(value));
}

const formatterNumber = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 0,
});
