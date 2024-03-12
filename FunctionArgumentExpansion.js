//Function Argument Expansion
// Here's a simple function that adds three numbers together.
function sum(a, b, c) {
    return a + b + c;
  }
  
  // I've got an array with three numbers. I'm going to add these up.
  const numbers = [4, 3, 7];
  /*
  By using spread syntax (...), I can pass each element of my array as 
  a separate argument to my sum function. Let's see what the total is.
  This will print the sum of the numbers in the array.
  */
  console.log(sum(...numbers)); // 
  
  // ===================================================================