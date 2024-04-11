/*
     Complete the function solveMeFirst to compute the sum of two integers.

Example
a = 7
b = 3


Return 10.

Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
- int: the sum of a and b

Constraints
1<=a, b<=1000

Sample Input

a = 2
b = 3
Sample Output

5

*/
const solveMeFirst = (a, b) => {
  let c = a + b;
  console.log(`The sum of ${a} and ${b} is ${c}.`);
  return c;
};
solveMeFirst(2, 4);

//The sum of 2 and 4 is 6.
