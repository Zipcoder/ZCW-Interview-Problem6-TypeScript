/// <reference path="LiteralNums.ts" />
/// <reference path="TimeParser.ts" />
/// <reference path="Time.ts" />


// var s = '12:39pm';
// console.log("meridian " +s.match(/\w(?=[m|M])/)[0]);
// console.log("hours " + s.match(/\d{2}(?=:)/)[1]);
// console.log("minutes " + s.match(/\d{2}(?=[a|A|p|P])/)[2]);

console.log("Some console test cases.")

var timeParser = new TimeParser();
// var armyTalk = new ArmyTalk();
// var hoursTest = timeParser.extractHoursAndConvert("10:23pm");
// var wordOutput = armyTalk.verbalizeHours(hoursTest);
// console.log(hoursTest);
// console.log(wordOutput);


var time = timeParser.makeTimeFromString("8:37pm");
console.log("Input = 8:37pm, Output = "+time.toString());

time = timeParser.makeTimeFromString("10:23pm");
console.log("Input = 10:23pm, Output = "+time.toString());

time = timeParser.makeTimeFromString("3:37pm");
console.log("Input = 3:37pm, Output = "+time.toString());

time = timeParser.makeTimeFromString("12:11am");
console.log("Input = 12:11am, Output = "+time.toString());

time = timeParser.makeTimeFromString("2:37am");
console.log("Input = 2:37am, Output = "+time.toString());

time = timeParser.makeTimeFromString("4:05am");
console.log("Input = 4:05am, Output = "+time.toString());


