/// <reference path="Time.ts"/>
/// <reference path="MilitaryTime.ts"/>
class Problem6 {

  displayEle: any;
  userInputEle : any;

  constructor() {
    this.displayEle = document.getElementById("display");
    this.userInputEle = document.getElementById("user_input");
  }

  initialize() {
    this.askForTime();
  }

  askForTime() {
    this.displayEle.innerHTML += "Enter a time to convert to military time phrase:";
  }

  submitTime() {
    this.displayEle.innerHTML += "<br/>";
    this.displayEle.innerHTML += this.convertTimeToMilitaryTimePhrase(this.userInputEle.value);
    this.displayEle.innerHTML += "<br/><br/>";
    this.askForTime();
  }

  convertTimeToMilitaryTimePhrase(time: string) {
    if(!this.isValidTime(time)) {
      return "Not a valid time input";
    }
    var regularTime = this.splitIntoHoursAndMinutes(time);
    var militaryTime = this.convertRegularToMilitaryTime(regularTime);
    return this.createMilitaryPhrase(militaryTime);
  }

  isValidTime(input: string) : boolean {
    var regex = /^(([[0]?[0-9]|1[0-2]):([0-5][0-9])(([aA]|[pP])[mM]))/;
    return regex.test(input);
  }

  splitIntoHoursAndMinutes(input: string) : Time {
    var inputHours: number;
    var inputMinutes: number;
    var inputIsAM: boolean;
    var time: Time;
    var timeParts: string[];
    var meridiem: string;

    timeParts = input.split(":");
    inputHours = new Number(timeParts[0]).valueOf();
    inputMinutes = new Number(timeParts[1].substring(0,2)).valueOf();
    meridiem = timeParts[1].substring(2);
    if("am" === meridiem.toLowerCase()) {
      inputIsAM = true;
    }
    else {
      inputIsAM = false;
    }
    time = new Time(inputHours, inputMinutes, inputIsAM);

    return time;
  }

  convertRegularToMilitaryTime(time: Time) : MilitaryTime {
    var newHours: number = time.hours;
    if(time.hours != 12) {
      if(!time.isAM) {
        newHours += 12;
      }
    }
    else {
      if(time.isAM) {
        newHours -= 12;
      }
    }
    return new MilitaryTime(newHours, time.minutes);
  }

  createMilitaryPhrase(time: MilitaryTime) : string {
    var words: string[] = [];
    var hours = time.hours;
    var minutes = time.minutes;

    if(hours < 10) {
        words.push(this.numAsString[0]);
    }

    if(hours <= 20) {
        words.push(this.numAsString[hours]);
    }
    else {
        words.push(this.numAsString[20]);
        words.push(this.numAsString[hours - 20]);
    }

    words.push("Hundred");

    if(minutes > 0) {
        words.push("and");
        if (minutes <= 20) {
            if (minutes < 10) {
                words.push(this.numAsString[0]);
            }
            words.push(this.numAsString[minutes]);
        } else {
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
  }

  numAsString: string[] = [
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
}
