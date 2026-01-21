function findMax(arr) {
if (!Array.isArray(arr) || arr.length === 0) {
return null;
}
const numbers = arr.filter((value) => typeof value === "number" && !Number.isNaN(value))
if (numbers.length === 0) {
return null;
}

return Math.max(...numbers);

}

module.exports = findMax;I