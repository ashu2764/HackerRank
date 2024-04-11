/*

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s='12:01:00PM'
Return '12:01:00'.

s ='12:01:00'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
Input Format

A single string s that represents a time in -hour clock format (i.e.hh:mm:ssAM  orhh:mm:ssPM  ).

Constraints

All input times are valid



*/

const timeConversion = (s) => {
  // hh:mm:ssAm
  // 0123456789
  // 12Am = 00
  //12PM = 12
  //01Pm  = 13 -->1+12 to
  //11PM = 23 -->11+12=23
  //12AM = 00
  //12:07:01Am ---> 00:07:01

  let amPm = s.charAt(8);
  let militiryHour = "";

  if (amPm == "A") {
    if (s.substring(0, 2) == "12") {
      militiryHour = "00";
    } else {
      militiryHour = s.substring(0, 2);
    }
  } else {
    //p,
    if (s.substring(0, 2) == "12") militiryHour = s.substring(0, 2);
    else {
      militiryHour = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  return militiryHour + s.substring(2, 8);
};

console.log(timeConversion("12:07:01Am"));

///00:07:01
