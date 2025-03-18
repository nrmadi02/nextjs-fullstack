import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "class-variance-authority/types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
