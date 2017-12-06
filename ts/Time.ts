/// <reference path="ArmyTalk.ts" />

class Time{

    private hours: number;
    private minutes: number;
    private meridiem: string;

    constructor(hours: number, minutes: number, meridiem:string){
        this.hours = hours;
        this.minutes = minutes;
        this.meridiem = meridiem;
    }

    toString = function(){
        var armyTalk = new ArmyTalk()
        return armyTalk.verbalizeHours(this.hours) + armyTalk.verbalizeMinutes(this.minutes);

    }
}