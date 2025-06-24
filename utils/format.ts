/**
 * Formats a number as Nigerian Naira currency with 2 decimal places
 *
 * @returns The formatted amount as a string with Nigerian Naira symbol and 2 decimal places
 *
 */
export const formatNaira = (amount: number) => {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

/**
 * Formats a given Date object into a locale-specific date string.
 *
 * @returns The formatted date string according to the specified locale.
 *
 */
export function formatDate(date: Date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale).format(date);
}
