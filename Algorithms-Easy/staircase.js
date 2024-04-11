/*
    Staircase detail

This is a staircase of size n =4
 :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, n, denoting the size of the staircase.

Constraints

0<n<=100.

 

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  0spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
*/

const staircase = (n) => {
  // Declaring a function named 'staircase' using arrow function syntax, taking 'n' as a parameter
  for (let i = 1; i <= n; i++) {
    // Loop through each row from 1 to 'n'
    let space = ""; // Initialize an empty string to store spaces for the current row
    for (let j = 0; j < n - i; j++) {
      // Loop to create spaces for the current row
      space += " "; // Add a space to the 'space' string for each iteration
    }
    let hashes = ""; // Initialize an empty string to store hashes for the current row
    for (let k = 0; k < i; k++) {
      // Loop to create hashes for the current row
      hashes += "#"; // Add a hash '#' to the 'hashes' string for each iteration
    }
    console.log(space + hashes); // Print the combination of spaces and hashes for the current row
  }
};

staircase(4); // Call the 'staircase' function with an argument of 4
