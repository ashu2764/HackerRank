/*
in this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer n.
The next line contains n space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints

1<=n<=10
0<=ar<arr[i]<=10^10


Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015
*/

const aVeryBigSum = (arr) => {
  let arrCount = 0;
  for (let i = 0; i < arr.length; i++){
    arrCount += arr[i]
  }
//   console.log()
  return `The sum of elements in the array ${arr} is ${arrCount}`
};

const test = [146,3,5,3]
const test2 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(test));
// The sum of elements in the array 146,3,5,3 is 157

console.log(aVeryBigSum(test2));
// The sum of elements in the array 1000000001,1000000002,1000000003,1000000004,1000000005 is 5000000015