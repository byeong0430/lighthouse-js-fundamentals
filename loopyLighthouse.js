function loopyLighthouse(range, multiples, words){

  //range represents the start and end values for the loop
  var start = range[0];
  var end = range[1];

  //multiples represent multiples you want to replace with words.
  var multi1 = multiples[0];
  var multi2 = multiples[1];

  //words represents the words that will replace the multiples
  var word1 = words[0];
  var word2 = words[1];

  for (var i = start; i <= end; i++){
    if ((i % multi1 === 0) && (i % multi2 !== 0)){
      console.log(word1);
    } else if ((i % multi2 === 0) && (i % multi1 !== 0)){
      console.log(word2);
    } else if ((i % multi1 === 0) && (i % multi2 === 0)){
      console.log(word1 + word2);
    } else{
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);