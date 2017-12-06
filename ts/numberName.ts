///<reference path = "timesplit.ts" />

class NumberName{
  numbers: string[] = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
 "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
 "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"];

  tens: string[] = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];

  militaryString: string;

  timeSplitter: TimeSplit = new TimeSplit();

militaryTimeConverter(input: string) :string {
  this.militaryString ="";
  let timeAsNumberArray: number[] = this.timeSplitter.splitsString(input);

    if(timeAsNumberArray[0] < 10){
      this.militaryString += this.numbers[0] + this.numbers[timeAsNumberArray[0]]
    }else if(timeAsNumberArray[0] >= 10 && timeAsNumberArray[0] <= 24){
      this.militaryString += this.numbers[timeAsNumberArray[0]];
    }
    this.militaryString += " Hundred and ";
    if(timeAsNumberArray[1] <= 20){
      this.militaryString += this.numbers[timeAsNumberArray[1]];

    }else if(timeAsNumberArray[1] >= 20 && timeAsNumberArray[1] <= 59){
        if(timeAsNumberArray[1] % 10 == 0){
          let tempNumber: number = timeAsNumberArray[1] / 10;
          this.militaryString += this.tens[tempNumber];

      } else {
          let secondTempNumber: number = Math.floor(timeAsNumberArray[1]/10);
          this.militaryString += this.tens[secondTempNumber] + " ";
          let thirdTempNumber = timeAsNumberArray[1] - (secondTempNumber * 10);
          this.militaryString += this.numbers[thirdTempNumber];
        }

    }
    return this.militaryString + " Hours";
  }
}
