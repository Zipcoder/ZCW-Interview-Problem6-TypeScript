/// <reference path="LiteralNums.ts" />
/// <reference path="TimeParser.ts" />
/// <reference path="Time.ts" />


// var s = '12:39pm';
// console.log("meridian " +s.match(/\w(?=[m|M])/)[0]);
// console.log("hours " + s.match(/\d{2}(?=:)/)[1]);
// console.log("minutes " + s.match(/\d{2}(?=[a|A|p|P])/)[2]);

console.log("Some console test cases.")

var timeParser = new TimeParser();

var time = timeParser.makeTimeFromString("1:37pm");
console.log(time.toString());

// time = timeParser.makeTimeFromString("11:37pm");
// console.log(time.toString());

// time = timeParser.makeTimeFromString("2:37am");
// console.log(time.toString());

// time = timeParser.makeTimeFromString("4:05am");
// console.log(time.toString());


