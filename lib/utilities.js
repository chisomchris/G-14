export const random = (range, min = 0) => {
  return Math.floor(Math.random() * (range + 1)) + min;
};

