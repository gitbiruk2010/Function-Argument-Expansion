# Function-Argument-Expansion
![image](https://github.com/gitbiruk2010/Function-Argument-Expansion/assets/103274295/23a0efa5-8a2d-49ac-bcf7-523d7d220552)
# Function Argument Expansion Example

## Overview
This example demonstrates how to use JavaScript's spread syntax to pass elements of an array as individual arguments to a function.

## sum Function
The `sum` function is designed to calculate the sum of three numbers. It takes three arguments and returns their sum.

javascript
function sum(a, b, c) {
  return a + b + c;
}
Usage

To use the sum function with an array of numbers, you can apply the spread syntax, which expands the array into individual arguments.

Here's an array of three numbers:

const numbers = [4, 3, 7];

Pass the array to the sum function using the spread syntax like this:

console.log(sum(...numbers));

The spread syntax (...) before numbers is what allows the array elements to be expanded into individual arguments for the sum function.
Output

Running the code will calculate the sum of the array elements and print the result to the console. For the array [4, 3, 7], the output will be 14.
