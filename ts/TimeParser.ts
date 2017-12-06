/// <reference path="Time.ts" />

class TimeParser{

makeTimeFromString = function(input: String){
    var hours = this.extractHoursAndConvert(input);
    var minutes = this.extractMinutesAsInt(input);
    var meridiem = this.extractMeridiem(input);
    var time = new Time(hours, minutes, meridiem);

    return time;
}

splitWithRegex = function(input: String){
    
    var meridian = input.match(/a|A|p|PM|m/);
    var hours = input.match(/\d{2}(?=:)/);
    var minutes = input.match(/\d{2}(?=[a|A|p|P])/); 

    return [hours, minutes, meridian];
}
extractHoursAndConvert = function(input: String){
    var hours: number;

    if (input.length ==7){
        hours = parseInt(input.substring(0,2));
    }else if (input.length ==6){
        hours = parseInt(input.substring(0,1));
    }
    if (!this.isAm(input)){
        hours+=12;
    }
    return hours;
}

extractMinutesAsInt = function(input: String){
    var minutes: number;
    if (input.length ==7){ 
        minutes = parseInt(input.substring(3,5));
    }else if (input.length ==6){
        minutes = parseInt(input.substring(2,4));
    }
    return minutes;
}

extractMeridiem = function(input: String){
    var meridiem: string;
    if (input.length ==7){    //0:10am
        meridiem = input.substring(5,7);
    }else if (input.length ==6){
        meridiem = input.substring(4,6);
    }
    return meridiem;
}

isAm = function(input:String){
    return (input.substring(4,5)== "a"||input.substring(5,6)== "a");
}


}

