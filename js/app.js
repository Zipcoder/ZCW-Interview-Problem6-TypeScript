var MilitaryTime = /** @class */ (function () {
    function MilitaryTime() {
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    MilitaryTime.prototype.convertTo24Hours = function (input) {
        var hourMinute = input.split(":");
        var hour = Number(hourMinute[0]);
        if (hourMinute[1].indexOf("AM") != -1 && hour < 10) {
            hourMinute[0] = "0" + hour;
        }
        if (hourMinute[1].indexOf("PM") !== -1 && hour != 12) {
            hourMinute[0] = (hour += 12).toString();
        }
        if (hourMinute[1].indexOf("AM") != -1 && hour == 12) {
            hourMinute[0] == "00";
        }
        return hourMinute[0] + ":" + hourMinute[1].substring(0, 2);
    };
    MilitaryTime.prototype.convertToWords = function (input) {
        var units = ["Zero", "One", "Two", "Three", "Four",
            "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];
        var num = Number(input);
        var word = "";
        if (num < 10) {
            word += units[0] + " " + units[num];
        }
        if (num < 20 && num >= 10) {
            word += units[num];
        }
        if (num >= 20) {
            if (num % 10 == 0) {
                word += tens[num / 10];
            }
            else {
                word += tens[num / 10] + " " + units[num % 10];
            }
        }
        return word;
    };
    MilitaryTime.prototype.convertToMilitaryTime = function () {
        var input = this.userInputEle.value;
        var formattedInput = this.convertTo24Hours(input);
        var time = formattedInput.split(":");
        var hour = this.convertToWords(time[0]);
        var minute = this.convertToWords(time[1]);
        this.displayEle.innerHTML += hour + " Hundred and " + minute + " Hours<br/>";
    };
    MilitaryTime.prototype.askForTime = function () {
        this.displayEle.innerHTML += "Please input time<br/>";
    };
    MilitaryTime.prototype.init = function () {
        this.askForTime();
    };
    return MilitaryTime;
}());
/// <reference path="Problem6.ts" />
var militaryTime = new MilitaryTime();
militaryTime.init();
var Car = /** @class */ (function () {
    function Car(engine) {
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Please supply engine";
            this._engine == value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert("Car engine started" + this._engine.engineType);
    };
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
//# sourceMappingURL=app.js.map