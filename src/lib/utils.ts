import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
Commit message: Restructured folder organization and added utility libraries
Commit description: Updated the folder structure to improve organization and efficiency. Additionally, added utility libraries including twmerge and clsx to enhance functionality and streamline development.