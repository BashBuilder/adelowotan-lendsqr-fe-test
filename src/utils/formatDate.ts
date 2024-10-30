export function formatDate(dateString: string): string {
  const sanitizedDateString = dateString.replace(/\//g, "");

  if (sanitizedDateString.length !== 8) {
    throw new Error(
      "Invalid date format. Please provide a date in mm/dd/yyyy or mmddyyyy format."
    );
  }

  const month = parseInt(sanitizedDateString.slice(0, 2), 10);
  const day = parseInt(sanitizedDateString.slice(2, 4), 10);
  const year = parseInt(sanitizedDateString.slice(4, 8), 10);

  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate.toString() + " 12:00PM";
}

export function formatDateToMMDDYYYY(dateString: string): string {
  const dateParts = dateString.split("-");
  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];
  return `${month}/${day}/${year}`;
}
