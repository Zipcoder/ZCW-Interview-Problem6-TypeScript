class MilitaryTime {

    private displayElement;
    private userInput;

    constructor() {
        this.displayElement = document.getElementById('display');
        this.userInput = document.getElementById('user_input');
    }

    init() {
        this.displayElement.innerHTML += "Enter the time to convert: ";
    }

    timeSplitter = function (time: string) {
        let regExp = new RegExp("([1-9]?[0-9]):([0-9][0-9])([p|a][m])");
        let t = time.match(regExp);
        let tArr = [t[1], t[2], t[3]];
        return tArr;
    }

    stringToInt = function (time: Array<string>) {
        let hour = parseInt(time[0]),
            min = parseInt(time[1]);

        if (time[2] == 'pm')
            hour = hour == 12 ? 12 : hour + 12;
        else if (hour == 12)
            hour = 0;
        return [hour, min];
    }

    getMilitary() {
        let numericTime = this.userInput.value;
        let splitTime = this.timeSplitter(numericTime);
        let timeToInt = this.stringToInt(splitTime);

        let delimiter = " Hundred and ";
        for (var ind in timeToInt) {
            var t = timeToInt[ind];
            if (t < 10)
                this.displayElement.innerHTML += "Zero  " + times[t] + delimiter;
            else if (t < 20)
                this.displayElement.innerHTML += times[t] + delimiter;
            else {
                this.displayElement.innerHTML += times[t - t % 10] + " ";
                this.displayElement.innerHTML += (t % 10 == 0 ? delimiter : times[t % 10] + delimiter);
            }
            delimiter = " Hours<br>";
        }
        this.init();
    }

}

enum times {
    One = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen,
    Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty, Thirty = 30, Forty = 40, Fifty = 50,
}

