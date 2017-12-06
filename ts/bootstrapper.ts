/// <reference path = "Problem6.ts" />

var textArea = document.getElementById("display");
textArea.innerHTML = "Please enter a time in the following format: HH:MMam."

function onSubmitButtonClick() : void {
    let problem6 = new Problem6();

    let htmlElement : any = document.getElementById("user_input");

    let input : string = htmlElement.value;

    let militaryTime = problem6.convertToMilitaryTime(input);

    textArea.innerHTML += "<br />" + militaryTime;
}

