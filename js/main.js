const getRandomPositiveInteger = (a = 0, b = 1000) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkStringLength = (str, maxLength) => str.length <= maxLength;

getRandomPositiveInteger(1, 10);
checkStringLength('Мяу', 10);
