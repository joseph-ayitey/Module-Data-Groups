// Predict and explain first...

//When you try to interpolate an object (recipe) into a template string, JavaScript converts it to a string using toString().
//its broken because recipe is an object, not a string

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// To fix this, You need to loop over recipe.ingredients and log each one separately.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

//Fix version 
//You need to loop over recipe.ingredients and log each one separately.

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");

for (let ingredient of recipe.ingredients) {
  console.log(ingredient);
}