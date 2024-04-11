/*
HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  0 to 100.
Any grade less than  40 is a failing grade.
Sam is a professor at the university and likes to round each student's  grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade  up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
Examples
grade = 84
 round to  (85 - 84 is less than 3)

 grade = 29
 do not round (result is less than 40)

 grade = 57
 do not round (60 - 57 is 3 or higher)


Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer,n , the number of students.
Each line i of the n subsequent lines contains a single integer,grades[i] .

Constraints
i<=n<=60
0<=grade[i]<=100

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33
*/

const gradingStudents = (grades) => {
  // Write your code here
  const n = grades.length; // store length of array in variable optional..

  //take a for loop to access all the values
  for (let i = 0; i < n; i++) {
    //first check for numbers are less the or equal to the 100...

    if (grades[i] <= 100) {
      // if num <= 100 then enter in if block

      //now check for if grades >= 38 0r modules of grade numbes is == 3 or 4
      if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
        //the add it into garde 5 - (grades[i] % 5);
        grades[i] += 5 - (grades[i] % 5);
      }
    } else {
      return `Please provide numbers in range of 0 to 100`;
    }
  }
  return grades;
};
console.log(gradingStudents([45, 56, 36, 78]));

// const gradingStudents = (grades) => {

//     let resultarr = []
//   if (grades <= 100) {
//     let roundGrade = Math.ceil(grades / 5) * 5;
//     let gradePolicy = roundGrade - grades;
//     if (grades < 38 || gradePolicy >= 3) {
//       return grades;
//     } else {
//       return roundGrade;
//     }
//   } else {
//     return `Please Provide Grades in range 0 - 100`;
//   }
// };

// console.log(gradingStudents(29))
