/// <reference path="time.ts"/>

class Problem6 {
  displayEle: any;
  inputEle: any;

  constructor() {
    this.displayEle = document.getElementById("display");
    this.inputEle = document.getElementById("user_input");
  }
  init() {
    this.askForTime();
  }

  convertInputToTime() {
    let timeIN: Time = this.createTime(this.inputEle.value);
    timeIN.convertToMilitary();
    this.displayEle.innerHTML += "<br>" + this.convertTimeToString(timeIN) + "<br>";
    this.askForTime();
  }

  convertTimeToString(time: Time): string {
    return this.convertNumToString(time.getHour()) + " Hundred and " + this.convertNumToString(time.getMinute()) + " Hours";
  }

  convertNumToString(number: number): string {
    if (number < 10) {
      return "Zero " + this.getSecondDigit(number);
    } else if (number < 20) {
      return this.getTeenNumber(number);
    } else {
      return this.convertNumberOverTwenty(number);
    }
  }

  convertNumberOverTwenty(number: number): string {
    let convertNumber: number = Math.floor(number / 10);
    let secondDigit: number = number - (convertNumber * 10);
    return this.getfirstDigit(convertNumber) + " " + this.getSecondDigit(secondDigit);
  }

  getfirstDigit(digit: number): string {
    let options: string[] = ["Twenty", "Thirty", "Forty", "Fifty"];
    return options[digit - 2];
  }

  getTeenNumber(number: number): string {
    let options: string[] = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    return options[number - 10];
  }

  getSecondDigit(digit: number): string {
    let options: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return options[digit];
  }

  createTime(stringTime: string): Time {
    let timeIsAM: boolean = (stringTime.substr(stringTime.length - 2).toLowerCase() == 'am');
    let timeSplit: string[] = stringTime.substr(0, stringTime.length - 2).split(":");
    return new Time(parseInt(timeSplit[0]), parseInt(timeSplit[1]), timeIsAM);
  }
  askForTime() {
    this.displayEle.innerHTML += "What time would you like to convert?";
  }
}
