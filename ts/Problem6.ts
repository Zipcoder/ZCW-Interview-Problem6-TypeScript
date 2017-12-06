class Problem6 {
    private hoursArrayList : string[] = [];
    private minutesArrayList : string[] = [];

    public constructor() {
        this.populateHours();
        this.populateMinutes();
    }

    convertToMilitaryTime(input : string) : string {
        let militaryTime : string = "";

        let isPm = this.checkIfPm(input);
        let hours = this.getHours(input);
        let minutes = this.getMinutes(input);

        militaryTime += this.convertHoursToString(hours, isPm);
        militaryTime += " Hundred ";
        militaryTime += this.convertMinutesToString(minutes);
        militaryTime += " Hours";

        return militaryTime;
    }

    checkIfPm(input : string) : boolean {
        input = input.toLowerCase();
        if (input.search("\\d{2}:\\d{2}pm") == -1) {
            return false;
        }
        return true;
    }

    getHours(input : string) : number {
        let splitAtColon : string[] = input.split(":");
        let hoursString : string = splitAtColon[0];
        let hoursNumber : number = parseInt(hoursString);
        return hoursNumber;
    }

    getMinutes(input : string) : number {
        let splitAtColon : string[] = input.split(":");
        let minutesString : string = splitAtColon[1].substr(0, 2);
        let minutesNumber : number = parseInt(minutesString);
        return minutesNumber;
    }

    getHoursArrayList() : string[] {
        return this.hoursArrayList;
    }

    getMinutesArrayList() : string[] {
        return this.minutesArrayList;
    }

    convertHoursToString(hour : number, isPm : boolean) : string {
        let hours : string = "";
        if (!isPm && hour < 10) {
            hours += "Zero ";
        }
        if (isPm) {
            return hours + this.hoursArrayList[hour + 12];
        }
        return hours + this.hoursArrayList[hour];
    }

    convertMinutesToString(minute : number) : string {
        let minutes : string = "";
        if (minute < 10) {
            minutes += "Zero ";
        }
        else {
            minutes += "and ";
        }
        console.log(this.minutesArrayList[2]);
        return minutes + this.minutesArrayList[minute];
    }

    populateMinutes() : void {
        for (let hour of this.hoursArrayList) {
            console.log(hour);
            this.minutesArrayList.push(hour);
        }
        this.minutesArrayList.push("Twenty Five");
        this.minutesArrayList.push("Twenty Six");
        this.minutesArrayList.push("Twenty Seven");
        this.minutesArrayList.push("Twenty Eight");
        this.minutesArrayList.push("Twenty Nine");
        this.minutesArrayList.push("Thirty");
        this.minutesArrayList.push("Thirty One");
        this.minutesArrayList.push("Thirty Two");
        this.minutesArrayList.push("Thirty Three");
        this.minutesArrayList.push("Thirty Four");
        this.minutesArrayList.push("Thirty Five");
        this.minutesArrayList.push("Thirty Six");
        this.minutesArrayList.push("Thirty Seven");
        this.minutesArrayList.push("Thirty Eight");
        this.minutesArrayList.push("Thirty Nine");
        this.minutesArrayList.push("Forty");
        this.minutesArrayList.push("Forty One");
        this.minutesArrayList.push("Forty Two");
        this.minutesArrayList.push("Forty Three");
        this.minutesArrayList.push("Forty Four");
        this.minutesArrayList.push("Forty Five");
        this.minutesArrayList.push("Forty Six");
        this.minutesArrayList.push("Forty Seven");
        this.minutesArrayList.push("Forty Eight");
        this.minutesArrayList.push("Forty Nine");
        this.minutesArrayList.push("Fifty");
        this.minutesArrayList.push("Fifty One");
        this.minutesArrayList.push("Fifty Two");
        this.minutesArrayList.push("Fifty Three");
        this.minutesArrayList.push("Fifty Four");
        this.minutesArrayList.push("Fifty Five");
        this.minutesArrayList.push("Fifty Six");
        this.minutesArrayList.push("Fifty Seven");
        this.minutesArrayList.push("Fifty Eight");
        this.minutesArrayList.push("Fifty Nine");
    }

    populateHours() : void{
        this.hoursArrayList.push("Nothing");
        this.hoursArrayList.push("One");
        this.hoursArrayList.push("Two");
        this.hoursArrayList.push("Three");
        this.hoursArrayList.push("Four");
        this.hoursArrayList.push("Five");
        this.hoursArrayList.push("Six");
        this.hoursArrayList.push("Seven");
        this.hoursArrayList.push("Eight");
        this.hoursArrayList.push("Nine");
        this.hoursArrayList.push("Ten");
        this.hoursArrayList.push("Eleven");
        this.hoursArrayList.push("Twelve");
        this.hoursArrayList.push("Thirteen");
        this.hoursArrayList.push("Fourteen");
        this.hoursArrayList.push("Fifteen");
        this.hoursArrayList.push("Sixteen");
        this.hoursArrayList.push("Seventeen");
        this.hoursArrayList.push("Eighteen");
        this.hoursArrayList.push("Nineteen");
        this.hoursArrayList.push("Twenty");
        this.hoursArrayList.push("Twenty One");
        this.hoursArrayList.push("Twenty Two");
        this.hoursArrayList.push("Twenty Three");
        this.hoursArrayList.push("Twenty Four");
    }
}