module.exports = function toReadable(number) {
  const units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (number === 0) return 'zero';

  let result = '';
  const hundreds = Math.floor(number / 100);
  const tensPart = Math.floor((number % 100) / 10);
  const unitsPart = (number % 100) % 10;

  if (hundreds > 0) {
    result += `${units[hundreds]} hundred`;
  }

  if (number % 100 >= 10 && number % 100 <= 19) {
    const space = result ? ' ' : '';
    result += `${space}${teens[number % 100]}`;
  } else {
    if (tensPart > 1) {
      const space = result ? ' ' : '';
      result += `${space}${tens[tensPart]}`;
    }
    if (unitsPart > 0) {
      const space = result ? ' ' : '';
      result += `${space}${units[unitsPart]}`;
    }
  }

  return result;
};
