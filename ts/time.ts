class Time {
  hour: number;
  minute: number;
  isAM: boolean;

  constructor(hour: number, minute: number, isAM: boolean) {
    this.hour = hour;
    this.minute = minute;
    this.isAM = isAM;
  }

  setHour(newHour: number) {
    this.hour = newHour;
  }
  getHour(): number {
    return this.hour;
  }
  getMinute(): number {
    return this.minute;
  }
  getIsAM(): boolean {
    return this.isAM;
  }

  convertToMilitary(): void {
    if (this.isAM && (this.hour == 12)) {
      this.hour = 0;
    } else if ((!this.isAM) && this.hour != 12) {
      this.hour += 12;
      if (this.hour == 24) {
        this.hour = 0;
      }
    }

  }
}
