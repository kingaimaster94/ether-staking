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
