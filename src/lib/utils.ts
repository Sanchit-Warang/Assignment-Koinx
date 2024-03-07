import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDateWithApproxYears(dateString: string): string {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - year;

  let aboutYears = '';
  if (yearsDifference > 0) {
      aboutYears = `(about ${yearsDifference} ${yearsDifference === 1 ? 'year' : 'years'})`;
  }

  return `${month} ${day}, ${year} ${aboutYears}`;
}

