///<reference path = "timesplit.ts" />
///<reference path = "numberName.ts" />
class Problem6 {
  displayEle: any;
  userInputEle: any;
  timeSplitter: NumberName = new NumberName();
  timeRegex: any = new RegExp(/([0-2]\d|\d):([0-5]\d)([a|p][m])/);

  constructor(){
    this.displayEle = document.getElementById("display");
    this.userInputEle = document.getElementById("user_input");
    }

    init(){
          this.askForTime();
        }

    submitTime(time : string){
      this.displayEle.innerHTML += this.timeSplitter.militaryTimeConverter(time)+"</br></br>"
      this.askForTime();
    }

    askForTime(){
        //this.patternMatcher();
        this.displayEle.innerHTML += "What time would you like to convert? (HH:MMam/pm)<br/>";
      }

    patternMatcher(){
      let time : string = this.userInputEle.value;
      time = time.toLowerCase();
      // console.log(time);
      // console.log(time == this.timeRegex);
      // console.log(time === this.timeRegex);
      // console.log(time.search(this.timeRegex));

      if (time.search(this.timeRegex) !== -1) {
        this.submitTime(time);
      } else{
        this.displayEle.innerHTML += "Invalid input, try again maggot<br/><br/>"
        this.askForTime();
      }
    }

}
