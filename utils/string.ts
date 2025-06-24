/**
 * Truncates a given text to a specified maximum length and appends "..." if truncated.
 *
 * @returns {string} - The truncated text with "..." appended if it exceeds the maximum length.
 *
 */
export const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
