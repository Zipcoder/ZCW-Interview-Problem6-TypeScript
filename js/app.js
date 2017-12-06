var Problem6 = /** @class */ (function () {
    function Problem6() {
        this.hoursArrayList = [];
        this.minutesArrayList = [];
        this.populateHours();
        this.populateMinutes();
    }
    Problem6.prototype.convertToMilitaryTime = function (input) {
        var militaryTime = "";
        var isPm = this.checkIfPm(input);
        var hours = this.getHours(input);
        var minutes = this.getMinutes(input);
        militaryTime += this.convertHoursToString(hours, isPm);
        militaryTime += " Hundred ";
        militaryTime += this.convertMinutesToString(minutes);
        militaryTime += " Hours";
        return militaryTime;
    };
    Problem6.prototype.checkIfPm = function (input) {
        input = input.toLowerCase();
        if (input.search("\\d{2}:\\d{2}pm") == -1) {
            return false;
        }
        return true;
    };
    Problem6.prototype.getHours = function (input) {
        var splitAtColon = input.split(":");
        var hoursString = splitAtColon[0];
        var hoursNumber = parseInt(hoursString);
        return hoursNumber;
    };
    Problem6.prototype.getMinutes = function (input) {
        var splitAtColon = input.split(":");
        var minutesString = splitAtColon[1].substr(0, 2);
        var minutesNumber = parseInt(minutesString);
        return minutesNumber;
    };
    Problem6.prototype.getHoursArrayList = function () {
        return this.hoursArrayList;
    };
    Problem6.prototype.getMinutesArrayList = function () {
        return this.minutesArrayList;
    };
    Problem6.prototype.convertHoursToString = function (hour, isPm) {
        var hours = "";
        if (!isPm && hour < 10) {
            hours += "Zero ";
        }
        if (isPm) {
            return hours + this.hoursArrayList[hour + 12];
        }
        return hours + this.hoursArrayList[hour];
    };
    Problem6.prototype.convertMinutesToString = function (minute) {
        var minutes = "";
        if (minute < 10) {
            minutes += "Zero ";
        }
        else {
            minutes += "and ";
        }
        console.log(this.minutesArrayList[2]);
        return minutes + this.minutesArrayList[minute];
    };
    Problem6.prototype.populateMinutes = function () {
        for (var _i = 0, _a = this.hoursArrayList; _i < _a.length; _i++) {
            var hour = _a[_i];
            console.log(hour);
            this.minutesArrayList.push(hour);
        }
        this.minutesArrayList.push("Twenty Five");
        this.minutesArrayList.push("Twenty Six");
        this.minutesArrayList.push("Twenty Seven");
        this.minutesArrayList.push("Twenty Eight");
        this.minutesArrayList.push("Twenty Nine");
        this.minutesArrayList.push("Thirty");
        this.minutesArrayList.push("Thirty One");
        this.minutesArrayList.push("Thirty Two");
        this.minutesArrayList.push("Thirty Three");
        this.minutesArrayList.push("Thirty Four");
        this.minutesArrayList.push("Thirty Five");
        this.minutesArrayList.push("Thirty Six");
        this.minutesArrayList.push("Thirty Seven");
        this.minutesArrayList.push("Thirty Eight");
        this.minutesArrayList.push("Thirty Nine");
        this.minutesArrayList.push("Forty");
        this.minutesArrayList.push("Forty One");
        this.minutesArrayList.push("Forty Two");
        this.minutesArrayList.push("Forty Three");
        this.minutesArrayList.push("Forty Four");
        this.minutesArrayList.push("Forty Five");
        this.minutesArrayList.push("Forty Six");
        this.minutesArrayList.push("Forty Seven");
        this.minutesArrayList.push("Forty Eight");
        this.minutesArrayList.push("Forty Nine");
        this.minutesArrayList.push("Fifty");
        this.minutesArrayList.push("Fifty One");
        this.minutesArrayList.push("Fifty Two");
        this.minutesArrayList.push("Fifty Three");
        this.minutesArrayList.push("Fifty Four");
        this.minutesArrayList.push("Fifty Five");
        this.minutesArrayList.push("Fifty Six");
        this.minutesArrayList.push("Fifty Seven");
        this.minutesArrayList.push("Fifty Eight");
        this.minutesArrayList.push("Fifty Nine");
    };
    Problem6.prototype.populateHours = function () {
        this.hoursArrayList.push("Nothing");
        this.hoursArrayList.push("One");
        this.hoursArrayList.push("Two");
        this.hoursArrayList.push("Three");
        this.hoursArrayList.push("Four");
        this.hoursArrayList.push("Five");
        this.hoursArrayList.push("Six");
        this.hoursArrayList.push("Seven");
        this.hoursArrayList.push("Eight");
        this.hoursArrayList.push("Nine");
        this.hoursArrayList.push("Ten");
        this.hoursArrayList.push("Eleven");
        this.hoursArrayList.push("Twelve");
        this.hoursArrayList.push("Thirteen");
        this.hoursArrayList.push("Fourteen");
        this.hoursArrayList.push("Fifteen");
        this.hoursArrayList.push("Sixteen");
        this.hoursArrayList.push("Seventeen");
        this.hoursArrayList.push("Eighteen");
        this.hoursArrayList.push("Nineteen");
        this.hoursArrayList.push("Twenty");
        this.hoursArrayList.push("Twenty One");
        this.hoursArrayList.push("Twenty Two");
        this.hoursArrayList.push("Twenty Three");
        this.hoursArrayList.push("Twenty Four");
    };
    return Problem6;
}());
/// <reference path = "Problem6.ts" />
var textArea = document.getElementById("display");
textArea.innerHTML = "Please enter a time in the following format: HH:MMam.";
function onSubmitButtonClick() {
    var problem6 = new Problem6();
    var htmlElement = document.getElementById("user_input");
    var input = htmlElement.value;
    var militaryTime = problem6.convertToMilitaryTime(input);
    textArea.innerHTML += "<br />" + militaryTime;
}
//# sourceMappingURL=app.js.map