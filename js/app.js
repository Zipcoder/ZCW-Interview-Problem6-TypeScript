var Problem6 = /** @class */ (function () {
    function Problem6() {
        this.upToNineteen = ["", "One", "Two", "Three", "Four",
            "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
            "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
            "Eighteen", "Nineteen"];
        this.aboveTwenty = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty"];
    }
    Problem6.prototype.convertTime = function (time) {
        if (time < 20) {
            return this.upToNineteen[time];
        }
        else if (time >= 20) {
            var index = Math.floor(time / 10);
            return this.aboveTwenty[index] + ((time % 10 != 0) ? " " : "") + this.upToNineteen[time % 10];
        }
        return null;
    };
    Problem6.prototype.numericalMilitaryHours = function (input) {
        var militaryHours = parseInt(input.getHours());
        if (input.getAmOrPm().toLowerCase() === ("pm")) {
            militaryHours = militaryHours + 12;
            return militaryHours;
        }
        else {
            return militaryHours;
        }
    };
    Problem6.prototype.numericalMilitaryMinutes = function (input) {
        return parseInt(input.getMinutes());
    };
    Problem6.prototype.wordFromOfMilitaryTime = function (input) {
        var hours = this.numericalMilitaryHours(input);
        console.log(hours);
        var minutes = this.numericalMilitaryMinutes(input);
        console.log(minutes);
        var militaryHoursWordForm;
        var militaryMinutesWordForm;
        if (hours < 10) {
            militaryHoursWordForm = "Zero " + this.convertTime(hours);
        }
        else {
            militaryHoursWordForm = this.convertTime(hours);
        }
        if (minutes < 10) {
            militaryMinutesWordForm = "Zero " + this.convertTime(minutes);
        }
        else {
            militaryMinutesWordForm = this.convertTime(minutes);
        }
        console.log(this.convertTime(minutes));
        var wordOfMilitaryTime = militaryHoursWordForm + " Hundred and " + militaryMinutesWordForm + " Hours";
        return wordOfMilitaryTime;
    };
    return Problem6;
}());
var TimeParser = /** @class */ (function () {
    function TimeParser(input) {
        this.parseHours(input);
        this.parseMinutes(input);
        this.parseAmOrPm(input);
    }
    TimeParser.prototype.parseHours = function (input) {
        this.hours = RegexMethods.findPattern("\\d{2}|\\d(?=:)", input);
    };
    TimeParser.prototype.parseMinutes = function (input) {
        console.log(RegexMethods.findPattern("[0-5]\\d(?!:)", input));
        this.minutes = RegexMethods.findPattern("[0-5]\\d(?!:)", input);
    };
    TimeParser.prototype.parseAmOrPm = function (input) {
        this.amOrPm = RegexMethods.findPattern("[aA|pP][mM]", input);
    };
    TimeParser.prototype.getHours = function () {
        return this.hours;
    };
    TimeParser.prototype.getMinutes = function () {
        return this.minutes;
    };
    TimeParser.prototype.getAmOrPm = function () {
        return this.amOrPm;
    };
    return TimeParser;
}());
var RegexMethods = /** @class */ (function () {
    function RegexMethods() {
    }
    RegexMethods.findPattern = function (regex, input) {
        return input.match(regex)[0];
    };
    return RegexMethods;
}());
/// <reference path="Timeparser.ts" />
var WebPageInteraction = /** @class */ (function () {
    function WebPageInteraction() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    WebPageInteraction.prototype.init = function () {
        this.askForTime();
    };
    WebPageInteraction.prototype.submitTime = function () {
        this.displayElement.innerHTML += "<br/>";
        var timeParser = new TimeParser(this.userInputElement.value);
        var militaryWordObject = new Problem6();
        var militaryWord = militaryWordObject.wordFromOfMilitaryTime(timeParser);
        //console.log(militaryWord);
        this.displayElement.innerHTML += militaryWord;
        this.displayElement.innerHTML += "<br/><br/>";
        this.askForTime();
    };
    WebPageInteraction.prototype.askForTime = function () {
        this.displayElement.innerHTML += "What is the time?";
    };
    return WebPageInteraction;
}());
/// <reference path="WebPageInteraction.ts" />
/// <reference path="Timeparser.ts" />
/// <reference path="Problem6.ts" />
var webPageStarter = new WebPageInteraction();
webPageStarter.init();
//# sourceMappingURL=app.js.map