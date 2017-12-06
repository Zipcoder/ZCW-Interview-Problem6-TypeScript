var Time = (function () {
    function Time(hour, minute, isAM) {
        this.hour = hour;
        this.minute = minute;
        this.isAM = isAM;
    }
    Time.prototype.setHour = function (newHour) {
        this.hour = newHour;
    };
    Time.prototype.getHour = function () {
        return this.hour;
    };
    Time.prototype.getMinute = function () {
        return this.minute;
    };
    Time.prototype.getIsAM = function () {
        return this.isAM;
    };
    Time.prototype.convertToMilitary = function () {
        if (this.isAM && (this.hour == 12)) {
            this.hour = 0;
        }
        else if ((!this.isAM) && this.hour != 12) {
            this.hour += 12;
            if (this.hour == 24) {
                this.hour = 0;
            }
        }
    };
    return Time;
}());
/// <reference path="time.ts"/>
var Problem6 = (function () {
    function Problem6() {
        this.displayEle = document.getElementById("display");
        this.inputEle = document.getElementById("user_input");
    }
    Problem6.prototype.init = function () {
        this.askForTime();
    };
    Problem6.prototype.convertInputToTime = function () {
        var timeIN = this.createTime(this.inputEle.value);
        timeIN.convertToMilitary();
        this.displayEle.innerHTML += "<br>" + this.convertTimeToString(timeIN) + "<br>";
        this.askForTime();
    };
    Problem6.prototype.convertTimeToString = function (time) {
        return this.convertNumToString(time.getHour()) + " Hundred and " + this.convertNumToString(time.getMinute()) + " Hours";
    };
    Problem6.prototype.convertNumToString = function (number) {
        if (number < 10) {
            return "Zero " + this.getSecondDigit(number);
        }
        else if (number < 20) {
            return this.getTeenNumber(number);
        }
        else {
            return this.convertNumberOverTwenty(number);
        }
    };
    Problem6.prototype.convertNumberOverTwenty = function (number) {
        var convertNumber = Math.floor(number / 10);
        var secondDigit = number - (convertNumber * 10);
        return this.getfirstDigit(convertNumber) + " " + this.getSecondDigit(secondDigit);
    };
    Problem6.prototype.getfirstDigit = function (digit) {
        var options = ["Twenty", "Thirty", "Forty", "Fifty"];
        return options[digit - 2];
    };
    Problem6.prototype.getTeenNumber = function (number) {
        var options = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        return options[number - 10];
    };
    Problem6.prototype.getSecondDigit = function (digit) {
        var options = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        return options[digit];
    };
    Problem6.prototype.createTime = function (stringTime) {
        var timeIsAM = (stringTime.substr(stringTime.length - 2).toLowerCase() == 'am');
        var timeSplit = stringTime.substr(0, stringTime.length - 2).split(":");
        return new Time(parseInt(timeSplit[0]), parseInt(timeSplit[1]), timeIsAM);
    };
    Problem6.prototype.askForTime = function () {
        this.displayEle.innerHTML += "What time would you like to convert?";
    };
    return Problem6;
}());
/// <reference path="problem6.ts"/>
var problem6 = new Problem6();
problem6.init();
//# sourceMappingURL=app.js.map