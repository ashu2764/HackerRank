/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.

Example

arr = [1,1,0,-1,-1]

There are n=5 elements, two positive, two negative and one zero. Their ratios are
2/5 = 0.400000, 
2/5 = 0.400000 and
1/5 = 0.200000 . Results are printed as:

 0.400000
 0.400000
 0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers  


Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer,n , the size of the array.
The second line contains n space-separated integers that describe arr[n].

Constraints

0 < n <= 100
-100 <= arr[i] <= 100



Output Format

Print the following 3 lines, each to 6 decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
*/

/*
    Array
    n = array.length

    Variables declaration positiveCount , negativeCount, zeroCount with initial value zero

    for loop for acces all values in array
    for(let i = 0 ; i < array.length; i++)

    condition check with if else statement 
    if(arr[i]>0){
        positiveCount++;
    }else if (arr[i]<0){
        negativeCount++
    }else{
        zeroCount++
    }

    To find the ratio take new varibles 

    postiveCountRatio = posiTiveCount/n
    negativeCountRatio = negativeCount/n
    zeroCountRatio = zeroCount/n

    take pricision to 6 decimel 
    
    return

*/

const plusMinus = (arr) => {
  const n = arr.length;
  let posiTiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < n; i++) {
    arr[i] > 0 ? posiTiveCount++ : arr[i] < 0 ? negativeCount++ : zeroCount++;
  }
  let postiveCountRatio = (posiTiveCount / n).toPrecision(6);
  let negativeCountRatio = (negativeCount / n).toPrecision(6);
  let zeroCountRatio = (zeroCount / n).toPrecision(6);
  return `${postiveCountRatio}\n${negativeCountRatio}\n${zeroCountRatio}`;
};

const array = [1, 1, 0, -1, -1];
console.log(plusMinus(array));
/*
0.400000
0.400000
0.200000
*/
