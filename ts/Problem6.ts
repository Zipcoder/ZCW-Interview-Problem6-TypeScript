class Problem6 {
    upToNineteen: string[] = [ "", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen" ];

    aboveTwenty: string[] = ["", "","Twenty","Thirty","Forty","Fifty","Sixty"];

    private convertTime(time : number): string{
        if (time < 20) {
            return this.upToNineteen[time];
        }

        else if (time >= 20) {
            let index: number = Math.floor(time / 10);
            return this.aboveTwenty[index] + ((time % 10 != 0) ? " " : "") + this.upToNineteen[time % 10];
        }
        return null;
        }

    private numericalMilitaryHours(input : TimeParser): number {
        let militaryHours: number = parseInt(input.getHours());


        if (input.getAmOrPm().toLowerCase() === ("pm")) {
            militaryHours = militaryHours + 12;
            return militaryHours;
        }
        else {
            return militaryHours;
        }
    }

    private numericalMilitaryMinutes(input: TimeParser): number {
        return parseInt(input.getMinutes());
    }

    public wordFromOfMilitaryTime(input: TimeParser): string {
        let hours: number = this.numericalMilitaryHours(input);
        console.log(hours);
        let minutes: number = this.numericalMilitaryMinutes(input);
        console.log(minutes);
        let militaryHoursWordForm: string;
        let militaryMinutesWordForm: string;
        if (hours<10){
            militaryHoursWordForm = "Zero "+ this.convertTime(hours);
        }
        else {
            militaryHoursWordForm = this.convertTime(hours);
        }
        if (minutes<10) {
            militaryMinutesWordForm = "Zero "+ this.convertTime(minutes);
        }
        else {
            militaryMinutesWordForm = this.convertTime(minutes);
        }

        console.log(this.convertTime(minutes));

        let wordOfMilitaryTime: string = militaryHoursWordForm+" Hundred and "+ militaryMinutesWordForm+" Hours";
        return wordOfMilitaryTime;
    }



}
