/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9]

The minimum sum is 
1+3+5+7=16 and the maximum sum is 1+3+5+7=24 .
 The function prints

16 24

Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of 5 integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format

A single line of five space-separated integers.

Constraints
1<=arr[i],=10^9


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
*/

const minMaxSum = (arr) => {
  //variable declaration
  let totalSum = 0;
  let minSum;
  let maxSum;

  //Sort the array
  let newArr = arr.sort((a, b) => {
    return a - b;
  });

  //for loop to find total sum of elements in tha array
  for (let i = 0; i < newArr.length; i++) {
    //totalSum = totalSum + newArr[i] it will add all the elements in the arrray
    totalSum += newArr[i];
  }

  //to find minSum subtract last element of sorted array from total
  minSum = totalSum - newArr[newArr.length - 1];

  //to find maxSum subtract first element of sorted array from total
  maxSum = totalSum - newArr[0];
  console.log(newArr);

  // return min sum and maxsum
  console.log(minSum, maxSum);
  return `${minSum}, ${maxSum}`;
};

console.log(miniMaxSum([1, 5, 8, 7, 6, 9]));
