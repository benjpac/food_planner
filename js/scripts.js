var recipeDB = [
  {
    "id" : 1,
    "name" : "Sausage Breakfast Sandwich",
    "image" : "http://www.twopeasandtheirpod.com/wp-content/uploads/2013/12/Sausage-Egg-and-Cheese-Sandwich-with-Maple-Butter-3.jpg",
    "ingredients" : [
      "pork sausage",
      "egg",
      "american cheese",
      "english muffin",
      "butter"
    ],
    "cuisine" : "American",

    "time" : 20,
    "calories" : 383,
    "vegetarian" : false,
    "breakfast" : true,
    "lunch": false,
    "dinner" : false,
    "directions" : [
      "INGREDIENTS: 8 oz pork sausage",
      "4 large eggs",
      "4 slices American cheese",
      "4 English muffins, halved",
      "4 tablespoons salted butter, softened",
      "DIRECTIONS: 1. Form sausage into 4 patties. Cook in a large, non-stick sprayed skillet over medium-high heat for 3-4 minutes a side, or until golden brown and crisp. Place sausage patties on a paper towel-lined plate to drain the grease.",
      "2. Drain fat from skillet then return to stove and turn heat down to medium. Whisk eggs, salt, and pepper in a bowl then pour into the skillet. Cook until top is nearly set but still glossy, then carefully fold eggs over in half. Remove from heat to finish cooking.",
      "3. In a small bowl, whisk butter until creamy and smooth. Toast the English Muffins.",
      "4. To assemble: Spread 1 tablespoon of maple butter on English Muffin, both halves. Place 1 egg on the bottom of a English muffin then top with cooked sausage patty and slice of cheese. Microwave for 20-30 seconds to melt cheese then cap with English muffin top. Continue making other sandwiches. Serve immediately."
    ]
  },
  {
    "id": 2,
    "name" : "Butter Chicken",
    "image" : "https://en.wikipedia.org/wiki/Butter_chicken#/media/File:Chicken_makhani.jpg",
    "ingredients" : [
      "onion",
      "garlic",
      "tomato sauce",
      "heavy cream",
      "butter",
      "cayenne pepper",
      "chicken chunks",
      "tandoori masala",
      "oil - vegetable",
      "salt"
    ],
    "cuisine" : "Indian",

    "time" : 60,
    "calories" : 384,
    "vegetarian" : false,
    "breakfast" : true,
    "lunch": true,
    "dinner" : true,
    "directions" : [
      "INGREDIENTS: 1 cup butter, divided",
      "1 onion, minced",
      "1 tablespoon minced garlic",
      "1 (15 ounce) can tomato sauce",
      "3 cups heavy cream",
      "2 teaspoons salt",
      "1 teaspoon cayenne pepper",
      "1 teaspoon garam masala",
      "1 1/2 pounds skinless, boneless chicken breast, cut into bite-sized chunks",
      "2 tablespoons vegetable oil",
      "2 tablespoons tandoori masala",
      "DIRECTIONS: 1. Preheat oven to 375 degrees F (190 degrees C).",
      "2. Melt a few tablespoons of butter in a skillet over medium heat. Stir in onion and garlic, and cook slowly until the onion caramelizes to a dark brown, about 15 minutes.",
      "3. Meanwhile melt the remaining butter in a saucepan over medium-high heat along with the tomato sauce, heavy cream, salt, cayenne pepper, and garam masala. Bring to a simmer, then reduce heat to medium-low; cover, and simmer for 30 minutes, stirring occasionally. Then stir in caramelized onions.",
      "4. While the sauce is simmering, toss cubed chicken breast with vegetable oil until coated, then season with tandoori masala and spread out onto a baking sheet.",
      "5. Bake chicken in preheated oven until no longer pink in the center, about 12 minutes. Once done, add the chicken to the sauce and simmer for 5 minutes before serving."
    ]
  }
]

console.log(recipeDB);

var userIngredients = ["egg", "butter","pork sausage","american cheese","english muffin"];

function findRecipes(recipeIngredients, userIngredients) {
  var matchCount = 0;
  userIngredients.forEach(function(userIngredient) {
    recipeIngredients.forEach(function(recipeIngredient) {
      if (userIngredient === recipeIngredient) {
        matchCount++;
      }
    })
  })
  console.log("match count:" +matchCount);
  if (matchCount === recipeIngredients.length) {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(recipeDB[0].name + ": " +  findRecipes(recipeDB[0].ingredients, userIngredients));
console.log(recipeDB[1].name + ": " +  findRecipes(recipeDB[1].ingredients, userIngredients));

function parseRecipes(recipeDB) {
  var possibleIngredients = [];
  recipeDB.forEach(function(recipe) {
    recipe.forEach(function(ingredient) {
      
    })
  })
}

$(document).ready(function() {

});
