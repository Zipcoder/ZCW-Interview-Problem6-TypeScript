var ArmyTalk = /** @class */ (function () {
    function ArmyTalk() {
        this.verbalizeHours = function (hours) {
            var output = "";
            if (hours < 10) {
                output += "Zero " + LiteralNums[hours];
            }
            else if (hours > 20) {
                output += LiteralNums[hours - hours % 10] + "-" + LiteralNums[hours % 10];
            }
            else if (hours > 10) {
                output += LiteralNums[hours];
            }
            return output + " Hundred";
        };
        this.verbalizeMinutes = function (minutes) {
            var output = "";
            if (minutes == 0) {
            }
            else if (minutes < 10) {
                output += " and Zero " + LiteralNums[minutes];
            }
            else if (minutes < 21 || minutes % 10 == 0) {
                output += " and " + LiteralNums[minutes];
            }
            else {
                output += " and " + LiteralNums[minutes - minutes % 10] + "-" + LiteralNums[minutes % 10];
            }
            output += " hours";
            return output;
        };
    }
    return ArmyTalk;
}());
var LiteralNums;
(function (LiteralNums) {
    LiteralNums[LiteralNums["Zero"] = 0] = "Zero";
    LiteralNums[LiteralNums["One"] = 1] = "One";
    LiteralNums[LiteralNums["Two"] = 2] = "Two";
    LiteralNums[LiteralNums["Three"] = 3] = "Three";
    LiteralNums[LiteralNums["Four"] = 4] = "Four";
    LiteralNums[LiteralNums["Five"] = 5] = "Five";
    LiteralNums[LiteralNums["Six"] = 6] = "Six";
    LiteralNums[LiteralNums["Seven"] = 7] = "Seven";
    LiteralNums[LiteralNums["Eight"] = 8] = "Eight";
    LiteralNums[LiteralNums["Nine"] = 9] = "Nine";
    LiteralNums[LiteralNums["Ten"] = 10] = "Ten";
    LiteralNums[LiteralNums["Eleven"] = 11] = "Eleven";
    LiteralNums[LiteralNums["Twelve"] = 12] = "Twelve";
    LiteralNums[LiteralNums["Thirteen"] = 13] = "Thirteen";
    LiteralNums[LiteralNums["Fourteen"] = 14] = "Fourteen";
    LiteralNums[LiteralNums["Fifteen"] = 15] = "Fifteen";
    LiteralNums[LiteralNums["Sixteen"] = 16] = "Sixteen";
    LiteralNums[LiteralNums["Seventeen"] = 17] = "Seventeen";
    LiteralNums[LiteralNums["Eighteen"] = 18] = "Eighteen";
    LiteralNums[LiteralNums["Nineteen"] = 19] = "Nineteen";
    LiteralNums[LiteralNums["Twenty"] = 20] = "Twenty";
    LiteralNums[LiteralNums["Thirty"] = 30] = "Thirty";
    LiteralNums[LiteralNums["Forty"] = 40] = "Forty";
    LiteralNums[LiteralNums["Fifty"] = 50] = "Fifty";
})(LiteralNums || (LiteralNums = {}));
/// <reference path="ArmyTalk.ts" />
var Time = /** @class */ (function () {
    function Time(hours, minutes, meridiem) {
        this.toString = function () {
            var armyTalk = new ArmyTalk();
            return armyTalk.verbalizeHours(this.hours) + armyTalk.verbalizeMinutes(this.minutes);
        };
        this.hours = hours;
        this.minutes = minutes;
        this.meridiem = meridiem;
    }
    return Time;
}());
/// <reference path="Time.ts" />
var TimeParser = /** @class */ (function () {
    function TimeParser() {
        this.makeTimeFromString = function (input) {
            var hours = this.extractHoursAndConvert(input);
            var minutes = this.extractMinutesAsInt(input);
            var meridiem = this.extractMeridiem(input);
            var time = new Time(hours, minutes, meridiem);
            return time;
        };
        this.splitWithRegex = function (input) {
            var meridian = input.match(/a|A|p|PM|m/);
            var hours = input.match(/\d{2}(?=:)/);
            var minutes = input.match(/\d{2}(?=[a|A|p|P])/);
            return [hours, minutes, meridian];
        };
        this.extractHoursAndConvert = function (input) {
            var hours;
            //11:37
            if (input.length == 7) {
                hours = parseInt(input.substring(0, 2));
                if (this.isAm(input) && hours == 12) {
                    hours = 0;
                    return hours;
                }
            }
            else if (input.length == 6) {
                hours = parseInt(input.substring(0, 1));
            }
            if (!this.isAm(input)) {
                hours += 12;
            }
            return hours;
        };
        this.extractMinutesAsInt = function (input) {
            var minutes;
            if (input.length == 7) {
                minutes = parseInt(input.substring(3, 5));
            }
            else if (input.length == 6) {
                minutes = parseInt(input.substring(2, 4));
            }
            return minutes;
        };
        this.extractMeridiem = function (input) {
            var meridiem;
            if (input.length == 7) {
                meridiem = input.substring(5, 7);
            }
            else if (input.length == 6) {
                meridiem = input.substring(4, 6);
            }
            return meridiem;
        };
        this.isAm = function (input) {
            return (input.substring(4, 5) == "a" || input.substring(5, 6) == "a");
        };
    }
    return TimeParser;
}());
/// <reference path="LiteralNums.ts" />
/// <reference path="TimeParser.ts" />
/// <reference path="Time.ts" />
// var s = '12:39pm';
// console.log("meridian " +s.match(/\w(?=[m|M])/)[0]);
// console.log("hours " + s.match(/\d{2}(?=:)/)[1]);
// console.log("minutes " + s.match(/\d{2}(?=[a|A|p|P])/)[2]);
console.log("Some console test cases.");
var timeParser = new TimeParser();
// var armyTalk = new ArmyTalk();
// var hoursTest = timeParser.extractHoursAndConvert("10:23pm");
// var wordOutput = armyTalk.verbalizeHours(hoursTest);
// console.log(hoursTest);
// console.log(wordOutput);
var time = timeParser.makeTimeFromString("8:37pm");
console.log("Input = 8:37pm, Output = " + time.toString());
time = timeParser.makeTimeFromString("10:23pm");
console.log("Input = 10:23pm, Output = " + time.toString());
time = timeParser.makeTimeFromString("3:37pm");
console.log("Input = 3:37pm, Output = " + time.toString());
time = timeParser.makeTimeFromString("12:11am");
console.log("Input = 12:11am, Output = " + time.toString());
time = timeParser.makeTimeFromString("2:37am");
console.log("Input = 2:37am, Output = " + time.toString());
time = timeParser.makeTimeFromString("4:05am");
console.log("Input = 4:05am, Output = " + time.toString());
//# sourceMappingURL=app.js.map