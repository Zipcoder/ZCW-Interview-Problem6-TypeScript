var TimeSplit = (function () {
    function TimeSplit() {
    }
    TimeSplit.prototype.splitsString = function (input) {
        var timeString = input.split(":");
        var amOrPm = timeString[1].substring(2);
        var hours = parseInt(timeString[0]);
        var minutes = parseInt(timeString[1].substring(0, 2));
        var timeAsValues = [];
        if (hours != 12) {
            if (amOrPm == "pm")
                hours += 12;
        }
        timeAsValues.push(hours);
        timeAsValues.push(minutes);
        return timeAsValues;
    };
    return TimeSplit;
}());
///<reference path = "timesplit.ts" />
var NumberName = (function () {
    function NumberName() {
        this.numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
            "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"];
        this.tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];
        this.timeSplitter = new TimeSplit();
    }
    NumberName.prototype.militaryTimeConverter = function (input) {
        this.militaryString = "";
        var timeAsNumberArray = this.timeSplitter.splitsString(input);
        if (timeAsNumberArray[0] < 10) {
            this.militaryString += this.numbers[0] + this.numbers[timeAsNumberArray[0]];
        }
        else if (timeAsNumberArray[0] >= 10 && timeAsNumberArray[0] <= 24) {
            this.militaryString += this.numbers[timeAsNumberArray[0]];
        }
        this.militaryString += " Hundred and ";
        if (timeAsNumberArray[1] <= 20) {
            this.militaryString += this.numbers[timeAsNumberArray[1]];
        }
        else if (timeAsNumberArray[1] >= 20 && timeAsNumberArray[1] <= 59) {
            if (timeAsNumberArray[1] % 10 == 0) {
                var tempNumber = timeAsNumberArray[1] / 10;
                this.militaryString += this.tens[tempNumber];
            }
            else {
                var secondTempNumber = Math.floor(timeAsNumberArray[1] / 10);
                this.militaryString += this.tens[secondTempNumber] + " ";
                var thirdTempNumber = timeAsNumberArray[1] - (secondTempNumber * 10);
                this.militaryString += this.numbers[thirdTempNumber];
            }
        }
        return this.militaryString + " Hours";
    };
    return NumberName;
}());
///<reference path = "timesplit.ts" />
///<reference path = "numberName.ts" />
var Problem6 = (function () {
    function Problem6() {
        this.timeSplitter = new NumberName();
        this.timeRegex = new RegExp(/([0-2]\d|\d):([0-5]\d)([a|p][m])/);
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    Problem6.prototype.init = function () {
        this.askForTime();
    };
    Problem6.prototype.submitTime = function (time) {
        this.displayEle.innerHTML += this.timeSplitter.militaryTimeConverter(time) + "</br></br>";
        this.askForTime();
    };
    Problem6.prototype.askForTime = function () {
        //this.patternMatcher();
        this.displayEle.innerHTML += "What time would you like to convert? (HH:MMam/pm)<br/>";
    };
    Problem6.prototype.patternMatcher = function () {
        var time = this.userInputEle.value;
        time = time.toLowerCase();
        // console.log(time);
        // console.log(time == this.timeRegex);
        // console.log(time === this.timeRegex);
        // console.log(time.search(this.timeRegex));
        if (time.search(this.timeRegex) !== -1) {
            this.submitTime(time);
        }
        else {
            this.displayEle.innerHTML += "Invalid input, try again maggot<br/><br/>";
            this.askForTime();
        }
    };
    return Problem6;
}());
/// <reference path = "problem6.ts" />
var timeConvert = new Problem6();
timeConvert.init();
//# sourceMappingURL=app.js.map