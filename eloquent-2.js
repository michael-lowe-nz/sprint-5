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
var board = "# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n# # # # # # # #\n";
console.log("Board1"+board);

var output = ""
var size = 8;
for (var i = 0; i < size; i++){
  for (var j = 0; i < size; i++){
    output += "#"
    if(j !== size-1){
      output +=" ";
    }
  }
  output+"\n";
}
