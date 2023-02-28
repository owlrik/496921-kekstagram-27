const getRandomInt = (min = 0, max = 1000) => {
  if (min < 0 || max <= min) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkStringMaxLength = (str, maxLength) => str.length <= maxLength;

getRandomInt(1, 10);
checkStringMaxLength('Мяу', 10);
