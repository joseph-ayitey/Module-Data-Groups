function sum(array) {
  return array.reduce((total, value) => {
    if (typeof value === "number" && !Number.isNaN(value)) {
      return total + value;
    }
    return total;
  }, 0);
}


module.exports = sum;
