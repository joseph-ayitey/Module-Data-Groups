// Predict and explain first...
//This code will throw an error and nothing will be logged.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//The for...of loop only works on iterable things like arrays, strings, or other objects that implement the iterable protocol.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// to fix this, i am using the object.values()

for (const value of Object.values(author)){
  console.log(value);
}
