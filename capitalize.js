
const capitalizeString = (str) => {
  if(typeof str === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }else {
    throw new Error(`${str} is not a string`);
  }
}

module.exports = capitalizeString;