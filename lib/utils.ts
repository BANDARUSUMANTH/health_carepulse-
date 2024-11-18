import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    console.error("Error cloning object", e);
    return null; // Return null or another default value if cloning fails
  }
};

export const convertFileToUrl = (file: File) => {
  const objectURL = URL.createObjectURL(file);
  return objectURL;
};

export const formatDateTime = (
  dateString: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date string");
  }

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone, // Shorthand property assignment
  };

  const formattedDateTime: string = dateObj.toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone, // Shorthand property assignment
  };

  const formattedDateDay: string = dateObj.toLocaleString(
    "en-US",
    dateDayOptions
  );

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
    timeZone, // Shorthand property assignment
  };

  const formattedDate: string = dateObj.toLocaleString("en-US", dateOptions);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone, // Shorthand property assignment
  };

  const formattedTime: string = dateObj.toLocaleString("en-US", timeOptions);

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function encryptKey(passkey: string) {
  return btoa(unescape(encodeURIComponent(passkey)));
}

export function decryptKey(passkey: string) {
  return decodeURIComponent(escape(atob(passkey)));
}
