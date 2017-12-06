/// <reference path="Timeparser.ts" />

class WebPageInteraction{

    displayElement:any;
    userInputElement:any;

    constructor(){
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input")
    }

    init(){
        this.askForTime();
    }

    submitTime() {
        this.displayElement.innerHTML += "<br/>";
        let timeParser = new TimeParser(this.userInputElement.value);
        let militaryWordObject: Problem6 = new Problem6();
        let militaryWord = militaryWordObject.wordFromOfMilitaryTime(timeParser);
        //console.log(militaryWord);
        this.displayElement.innerHTML += militaryWord;

        this.displayElement.innerHTML += "<br/><br/>";
        this.askForTime();
    }

    askForTime(){
        this.displayElement.innerHTML += "What is the time?"
    }
}