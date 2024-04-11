/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]


The maximum height candles are 4 units high. There are  of them, so return 2 .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer,n , the size of candle[] .
The second line contains  space-separated integers, where each integer i describes the height of candles[i] .

Constraints

1<=n<=10^5
1<= candles[i]<=10&

Sample Input 0

4
3 2 1 3
Sample Output 0

2
*/

const birthdayCakeCandles = (candles) => {
  //Take a variable candleCount with initial value 0;
  let candelesCount = 0;
  //Now sort the array and store it into new Array
  let newCandles = candles.sort((a, b) => a - b); // new array gives accesnding order the larger item is in the last palce
  // console.log(newCandles)
  //use for loop to access all the items in array
  for (let i = 0; i < newCandles.length; i++) {
    //use if statement to check the condition if items in arrray are equal to Last index element if they are equal then increase the candle count;

    if (newCandles[i] === newCandles[newCandles.length - 1]) {
      candelesCount++;
    }
  }
  return candelesCount;
};

console.log(birthdayCakeCandles([3, 3, 2, 4, 4, 4, 5, 5, 5, 5, 6, 6, 1, 3]));
