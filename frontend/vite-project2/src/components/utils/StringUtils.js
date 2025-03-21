/**
 * StringUtils.js
 *
 * A utility file containing functions for manipulating strings.
 * This file is designed to be imported and used across the application.
 */

//-----------------------------------------------------------------------------
// String Utility Functions
//-----------------------------------------------------------------------------

/**
 * truncateString(str, maxLength, suffix)
 *
 * Truncates a string to a specified maximum length, adding a suffix if the string is truncated.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the truncated string.
 * @param {string} [suffix='...'] The suffix to add if the string is truncated. Defaults to "...".
 * @returns {string} The truncated string.
 *
 * Example:
 * truncateString("This is a long string", 10); // Returns "This is a..."
 * truncateString("Short string", 20); // Returns "Short string"
 */
const truncateString = (str, maxLength, suffix = "...") => {
    if (!str) {
      return ""; // Handle null or undefined strings
    }
  
    if (str.length <= maxLength) {
      return str; // No need to truncate
    }
  
    return str.substring(0, maxLength) + suffix;
  };
  
  /**
   * capitalizeFirstLetter(str)
   *
   * Capitalizes the first letter of a string.
   *
   * @param {string} str The string to capitalize.
   * @returns {string} The capitalized string.
   *
   * Example:
   * capitalizeFirstLetter("hello"); // Returns "Hello"
   */
  const capitalizeFirstLetter = (str) => {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * stringToKebabCase(str)
   *
   * Converts a string to kebab-case (e.g., "Hello World" becomes "hello-world").
   *
   * @param {string} str The string to convert.
   * @returns {string} The kebab-cased string.
   */
  const stringToKebabCase = (str) => {
    if (!str) {
      return "";
    }
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2") // Split camelCase words
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .toLowerCase();
  };
  
  /**
   * checkStringLength(str, minLength, maxLength)
   *
   * Checks if a string's length is within a specified range.
   *
   * @param {string} str The string to check.
   * @param {number} minLength The minimum allowed length.
   * @param {number} maxLength The maximum allowed length.
   * @returns {boolean} True if the string length is within the range, false otherwise.
   */
  const checkStringLength = (str, minLength, maxLength) => {
    if (!str) {
      return false;
    }
    const length = str.length;
    return length >= minLength && length <= maxLength;
  };
  
  /**
   * reverseString(str)
   *
   * Reverses a string.
   *
   * @param {string} str The string to reverse.
   * @returns {string} The reversed string.
   */
  const reverseString = (str) => {
    if (!str) {
      return "";
    }
    return str.split("").reverse().join("");
  };
  
  /**
   * generateRandomString(length)
   *
   * Generates a random string of a specified length.
   *
   * @param {number} length The length of the random string.
   * @returns {string} The random string.
   */
  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  /**
   * countOccurrences(str, substring)
   *
   * Counts the number of occurrences of a substring within a string.
   *
   * @param {string} str The string to search within.
   * @param {string} substring The substring to count.
   * @returns {number} The number of occurrences.
   */
  const countOccurrences = (str, substring) => {
    if (!str || !substring) {
      return 0;
    }
    let count = 0;
    let position = 0;
    while ((position = str.indexOf(substring, position)) !== -1) {
      count++;
      position += substring.length;
    }
    return count;
  };
  
  /**
   * isPalindrome(str)
   *
   * Checks if a string is a palindrome (reads the same forwards and backward).
   *
   * @param {string} str The string to check.
   * @returns {boolean} True if the string is a palindrome, false otherwise.
   */
  const isPalindrome = (str) => {
    if (!str) {
      return false;
    }
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  };
  
  /**
   * removeWhitespace(str)
   *
   * Removes all whitespace from a string.
   *
   * @param {string} str The string to process.
   * @returns {string} The string with whitespace removed.
   */
  const removeWhitespace = (str) => {
    if (!str) {
      return "";
    }
    return str.replace(/\s/g, "");
  };
  
  //-----------------------------------------------------------------------------
  // Additional Utility Functions
  //-----------------------------------------------------------------------------
  
  /**
   * repeatString(str, times)
   *
   * Repeats a string a specified number of times.
   *
   * @param {string} str The string to repeat.
   * @param {number} times The number of times to repeat the string.
   * @returns {string} The repeated string.
   */
  const repeatString = (str, times) => {
    if (!str || times <= 0) {
      return "";
    }
    return str.repeat(times);
  };
  
  /**
   * padString(str, length, char)
   *
   * Pads a string to a specified length with a given character.
   *
   * @param {string} str The string to pad.
   * @param {number} length The desired length of the padded string.
   * @param {string} char The character to use for padding.
   * @returns {string} The padded string.
   */
  const padString = (str, length, char = " ") => {
    if (!str) {
      return "";
    }
    return str.padStart((str.length + length) / 2, char).padEnd(length, char);
  };
  
  /**
   * convertToCamelCase(str)
   *
   * Converts a string to camelCase.
   *
   * @param {string} str The string to convert.
   * @returns {string} The camelCased string.
   */
  const convertToCamelCase = (str) => {
    if (!str) {
      return "";
    }
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
  };
  
  /**
   * convertToSnakeCase(str)
   *
   * Converts a string to snake_case.
   *
   * @param {string} str The string to convert.
   * @returns {string} The snake_cased string.
   */
  const convertToSnakeCase = (str) => {
    if (!str) {
      return "";
    }
    return str
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/\s+/g, "_")
      .toLowerCase();
  };
  
  //-----------------------------------------------------------------------------
  // Export Functions
  //-----------------------------------------------------------------------------
  
  export {
    truncateString,
    capitalizeFirstLetter,
    stringToKebabCase,
    checkStringLength,
    reverseString,
    generateRandomString,
    countOccurrences,
    isPalindrome,
    removeWhitespace,
    repeatString,
    padString,
    convertToCamelCase,
    convertToSnakeCase,
  };