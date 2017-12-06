var Time = (function () {
    function Time(hours, minutes, isAM) {
        this.hours = hours;
        this.minutes = minutes;
        this.isAM = isAM;
    }
    return Time;
}());
var MilitaryTime = (function () {
    function MilitaryTime(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }
    return MilitaryTime;
}());
/// <reference path="Time.ts"/>
/// <reference path="MilitaryTime.ts"/>
var Problem6 = (function () {
    function Problem6() {
        this.numAsString = [
            "Zero",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Eleven",
            "Twelve",
            "Thirteen",
            "Fourteen",
            "Fifteen",
            "Sixteen",
            "Seventeen",
            "Eighteen",
            "Nineteen",
            "Twenty",
            "Thirty",
            "Forty",
            "Fifty"
        ];
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    Problem6.prototype.initialize = function () {
        this.askForTime();
    };
    Problem6.prototype.askForTime = function () {
        this.displayEle.innerHTML += "Enter a time to convert to military time phrase:";
    };
    Problem6.prototype.submitTime = function () {
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += this.convertTimeToMilitaryTimePhrase(this.userInputEle.value);
        this.displayEle.innerHTML += "<br/><br/>";
        this.askForTime();
    };
    Problem6.prototype.convertTimeToMilitaryTimePhrase = function (time) {
        if (!this.isValidTime(time)) {
            return "Not a valid time input";
        }
        var regularTime = this.splitIntoHoursAndMinutes(time);
        var militaryTime = this.convertRegularToMilitaryTime(regularTime);
        return this.createMilitaryPhrase(militaryTime);
    };
    Problem6.prototype.isValidTime = function (input) {
        var regex = /^(([[0]?[0-9]|1[0-2]):([0-5][0-9])(([aA]|[pP])[mM]))/;
        return regex.test(input);
    };
    Problem6.prototype.splitIntoHoursAndMinutes = function (input) {
        var inputHours;
        var inputMinutes;
        var inputIsAM;
        var time;
        var timeParts;
        var meridiem;
        timeParts = input.split(":");
        inputHours = new Number(timeParts[0]).valueOf();
        inputMinutes = new Number(timeParts[1].substring(0, 2)).valueOf();
        meridiem = timeParts[1].substring(2);
        if ("am" === meridiem.toLowerCase()) {
            inputIsAM = true;
        }
        else {
            inputIsAM = false;
        }
        time = new Time(inputHours, inputMinutes, inputIsAM);
        return time;
    };
    Problem6.prototype.convertRegularToMilitaryTime = function (time) {
        var newHours = time.hours;
        if (time.hours != 12) {
            if (!time.isAM) {
                newHours += 12;
            }
        }
        else {
            if (time.isAM) {
                newHours -= 12;
            }
        }
        return new MilitaryTime(newHours, time.minutes);
    };
    Problem6.prototype.createMilitaryPhrase = function (time) {
        var words = [];
        var hours = time.hours;
        var minutes = time.minutes;
        if (hours < 10) {
            words.push(this.numAsString[0]);
        }
        if (hours <= 20) {
            words.push(this.numAsString[hours]);
        }
        else {
            words.push(this.numAsString[20]);
            words.push(this.numAsString[hours - 20]);
        }
        words.push("Hundred");
        if (minutes > 0) {
            words.push("and");
            if (minutes <= 20) {
                if (minutes < 10) {
                    words.push(this.numAsString[0]);
                }
                words.push(this.numAsString[minutes]);
            }
            else {
                var tens = Math.floor(minutes / 10);
                var ones = minutes - tens * 10;
                words.push(this.numAsString[18 + tens]);
                if (ones > 0) {
                    words.push(this.numAsString[ones]);
                }
            }
        }
        words.push("Hours");
        return words.join(" ");
    };
    return Problem6;
}());
/// <reference path="Problem6.ts"/>
var problem6 = new Problem6();
problem6.initialize();
//# sourceMappingURL=app.js.map