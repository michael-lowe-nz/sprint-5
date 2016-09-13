// Exercise 1
// Looping a Triangle
var output = ""
for(var i = 0; i < 7; i++){
  output += "#";
  console.log(output);
}

// Exercise 2
// FizzBuzz
for (var i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0){
    console.log("Fizz");
  }
  else if(i % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}


//Exercise 3
//ChessBoard
var output = "" //make empty string for output
var size = 4; // define size of the grid
for (var i = 0; i < size; i++){ // first loop does 8 rows
  for (var j = 0; j < size; j++){ // second loop does 8 columns
    output += "#"
    if(j !== size-1){ // if its not the last one in the row add a space
      output +=" ";
    }
    else output +="\n" // otherwise put a new line in
  }
}
console.log("output ("+size+"): \n"+output);
