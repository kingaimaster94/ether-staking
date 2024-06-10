// Constants
export const REG_CHECK_NUMBER = /^[-+]?(\d+|\d*\.\d+|\d+\.\d*)([eE][-+]?\d+)?$/;

// Global Functions
export const displayAddress = (address, sublength = 4) => {
  if (!address || !address.length) return "";
  return address.slice(0, sublength) + "..." + address.slice(-sublength);
};

export const decimalToEth = (amount) => {
  return Number(amount) / Number(10 ** 18);
}

export const decimalFromEth = (amount) => {
  return BigInt(amount * (10 ** 18));
}

export function convertBigIntToDateString(bigIntTimestamp) {
  // Convert BigInt to Number (multiply by 1000 if your BigInt is in seconds)
  const timestampInMilliseconds = Number(bigIntTimestamp) * 1000;

  // Create a Date object
  const date = new Date(timestampInMilliseconds);

  // Format the date as a string
  const dateString = date.toLocaleString();

  return dateString;
}