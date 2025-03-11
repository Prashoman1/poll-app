export const FormatDateTime = (isoString: string) => {
  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString("en-GB"); // "11/03/2025"

  // Extract time in HH:MM AM/PM format
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { formattedDate, formattedTime };
};

export const CompareDateTime = (isoString: string) => {
  const givenDate = new Date(isoString); // Convert ISO string to Date object
  const now = new Date(); // Get the current date & time

  if (
    givenDate.getTime() === now.getTime() ||
    givenDate.getTime() < now.getTime()
  ) {
    return true; // Given date is less than or equal to current date
  } else {
    return false; // Given date is greater than current date
  }
};
