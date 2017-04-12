var recipeDB = [
  {
    "id" : 1,
    "name" : "sausage_breakfast_sandwich",
    "image" : "http://www.twopeasandtheirpod.com/wp-content/uploads/2013/12/Sausage-Egg-and-Cheese-Sandwich-with-Maple-Butter-3.jpg",
    "ingredients" : [
      "pork_sausage",
      "egg",
      "american_cheese",
      "english_muffin",
      "butter"
    ],
    "cuisine" : "american",
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
    "name" : "butter_chicken",
    "image" : "https://en.wikipedia.org/wiki/Butter_chicken#/media/File:Chicken_makhani.jpg",
    "ingredients" : [
      "onion",
      "garlic",
      "tomato_sauce",
      "heavy_cream",
      "butter",
      "cayenne_pepper",
      "chicken",
      "tandoori_masala",
      "oil_-_vegetable",
      "salt"
    ],
    "cuisine" : "indian",
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

// find recipes that user has ingredients for
function matchedIngredients(recipeIngredients, userIngredients) {
  var matchCount = 0;
  userIngredients.forEach(function(userIngredient) {
    recipeIngredients.forEach(function(recipeIngredient) {
      // if (userIngredient === recipeIngredient) {
        if (userIngredient.includes(recipeIngredient)) {
        matchCount++;
      }
    })
  })
  // console.log("match count:" +matchCount);
  if (matchCount === recipeIngredients.length) {
    return true;
  }
  else
  {
    return false;
  }
}

// function noMatchArray(array) {
//
// }

// gather all ingredients from recipeDB and display as list with no duplicates, sort
function parseRecipes(recipeDB) {
  var recipeIngredients = [];
  recipeDB.forEach(function(recipe) {
    recipe.ingredients.forEach(function(ingredient) {
      if (recipeIngredients.indexOf(ingredient) === -1)
      {
        recipeIngredients.push(ingredient);
      }
    })
  })
  return recipeIngredients.sort();
}

// caps first letter of string
function formatForFrontend(string) {
  var formattedString = string.charAt(0).toUpperCase() + string.slice(1);
  formattedString = formattedString.replace(/_/g," ");
  return formattedString;
}

// replaces spaces in string to underscores and change to lowercase
function formatForBackend(string) {
  return string.replace(/ /g,"_").toLowerCase();
}

$(document).ready(function() {
  var recipeIngredients = parseRecipes(recipeDB);
  recipeIngredients.forEach(function(myIngredient)
  {
    var frontendIngredient = formatForFrontend(myIngredient);
    $("#my-ingredients").append(
      '<div class="form-check">'+
        '<label class="form-check-label">'+
          '<input class="form-check-input" type="checkbox" name="checkbox" value=' + myIngredient + '> '+
          frontendIngredient +
        '</label>'+
      '</div>'
    )
  })

  var checkedIngredient = [];
  $("#my-ingredients input[name='checkbox']").click(function() {
    if (this.checked)
    {
      checkedIngredient.push($(this).val());
    }
    else
    {
      var index = checkedIngredient.indexOf(this);
      if (index === -1)
      {
        checkedIngredient.splice(index, 1);
      }
    }
    recipeDB.forEach(function(recipe) {
      var matchedRecipes = [];
      var matchedRecipe = matchedIngredients(recipe.ingredients, checkedIngredient)
      // $("#matched-recipes").empty();
      if (matchedRecipe)
      {
        matchedRecipes.push(recipe)
        $("#matched-recipes").append(
          '<div class="col-6 col-lg-4">'+
            '<div class="card">'+
              '<a href='+matchedRecipes.name+'-ID'+matchedRecipes.id+'>'+
                '<img class="card-img-top img-fluid" src='+matchedRecipes.image+'>'+
                '<h6 class="card-title text-center mt-2">'+matchedRecipes.name+'</h6>'+
              '</a>'+
            '</div>'+
          '</div>'
        )
      }
      console.log(matchedRecipes);
    })
    console.log("checkedIngredient array: " + checkedIngredient);
  })
});
