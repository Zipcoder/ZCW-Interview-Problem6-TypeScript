class TimeParser {
    private hours: string;
    private minutes: string;
    private amOrPm: string ;

    constructor(input: string) {
        this.parseHours(input);
        this.parseMinutes(input);
        this.parseAmOrPm(input);
    }

    private parseHours(input: string): void {
        this.hours = RegexMethods.findPattern("\\d{2}|\\d(?=:)", input);
    }

    private parseMinutes(input: string): void {
        console.log(RegexMethods.findPattern("[0-5]\\d(?!:)", input));
        this.minutes = RegexMethods.findPattern("[0-5]\\d(?!:)", input);
    }

    private parseAmOrPm(input: string): void {
        this.amOrPm = RegexMethods.findPattern("[aA|pP][mM]", input);
    }

    public getHours(): string {
        return this.hours;
    }

    public getMinutes(): string {
        return this.minutes;
    }

    public getAmOrPm(): string {
        return this.amOrPm;
    }
}
