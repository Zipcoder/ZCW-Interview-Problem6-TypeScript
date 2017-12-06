var MilitaryTime = /** @class */ (function () {
    function MilitaryTime() {
        this.timeSplitter = function (time) {
            var regExp = new RegExp("([1-9]?[0-9]):([0-9][0-9])([p|a][m])");
            var t = time.match(regExp);
            var tArr = [t[1], t[2], t[3]];
            return tArr;
        };
        this.stringToInt = function (time) {
            var hour = parseInt(time[0]), min = parseInt(time[1]);
            if (time[2] == 'pm')
                hour = hour == 12 ? 12 : hour + 12;
            else if (hour == 12)
                hour = 0;
            return [hour, min];
        };
        this.displayElement = document.getElementById('display');
        this.userInput = document.getElementById('user_input');
    }
    MilitaryTime.prototype.init = function () {
        this.displayElement.innerHTML += "Enter the time to convert: ";
    };
    MilitaryTime.prototype.getMilitary = function () {
        var numericTime = this.userInput.value;
        var splitTime = this.timeSplitter(numericTime);
        var timeToInt = this.stringToInt(splitTime);
        var delimiter = " Hundred and ";
        for (var ind in timeToInt) {
            var t = timeToInt[ind];
            if (t < 10)
                this.displayElement.innerHTML += "Zero  " + times[t] + delimiter;
            else if (t < 20)
                this.displayElement.innerHTML += times[t] + delimiter;
            else {
                this.displayElement.innerHTML += times[t - t % 10] + " ";
                this.displayElement.innerHTML += (t % 10 == 0 ? delimiter : times[t % 10] + delimiter);
            }
            delimiter = " Hours<br>";
        }
        this.init();
    };
    return MilitaryTime;
}());
var times;
(function (times) {
    times[times["One"] = 1] = "One";
    times[times["Two"] = 2] = "Two";
    times[times["Three"] = 3] = "Three";
    times[times["Four"] = 4] = "Four";
    times[times["Five"] = 5] = "Five";
    times[times["Six"] = 6] = "Six";
    times[times["Seven"] = 7] = "Seven";
    times[times["Eight"] = 8] = "Eight";
    times[times["Nine"] = 9] = "Nine";
    times[times["Ten"] = 10] = "Ten";
    times[times["Eleven"] = 11] = "Eleven";
    times[times["Twelve"] = 12] = "Twelve";
    times[times["Thirteen"] = 13] = "Thirteen";
    times[times["Fourteen"] = 14] = "Fourteen";
    times[times["Fifteen"] = 15] = "Fifteen";
    times[times["Sixteen"] = 16] = "Sixteen";
    times[times["Seventeen"] = 17] = "Seventeen";
    times[times["Eighteen"] = 18] = "Eighteen";
    times[times["Nineteen"] = 19] = "Nineteen";
    times[times["Twenty"] = 20] = "Twenty";
    times[times["Thirty"] = 30] = "Thirty";
    times[times["Forty"] = 40] = "Forty";
    times[times["Fifty"] = 50] = "Fifty";
})(times || (times = {}));
/// <reference path="Problem6.ts" />
var militaryTime = new MilitaryTime();
militaryTime.init();
//# sourceMappingURL=app.js.map