// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

 for (const [coin, quantity] of Object.entries(till)) {
    const valueInPence = parseInt(coin, 10);
    total += valueInPence * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}


module.exports = totalTill;





// a) What is the target output when totalTill is called with the till object

// b) Why do we need to use Object.entries inside the for...of loop in this function?
      //Object.entries(till) converts the object into an array of [key, value] pairs
      //This allows for...of to iterate over each coin and its quantity

// c) What does coin * quantity evaluate to inside the for...of loop?
      //coin is a string key from the object, like "1" or "50".

// d) Write a test for this function to check it works and then fix the implementation of totalTill
    //test have been added to the testing file.
