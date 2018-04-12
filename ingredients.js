var ingredients =["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var ingredientLength = ingredients.length;
var i = 0;
while (i < ingredientLength){
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (var j = 0; j < ingredientLength; j++){
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var k = ingredientLength - 1; k >= 0; k--){
  console.log(ingredients[k]);
}

