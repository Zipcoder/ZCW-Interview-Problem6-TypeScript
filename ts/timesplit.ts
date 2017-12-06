class TimeSplit{

  splitsString(input: string):number[]{
    let timeString: string[] = input.split(":");
    let amOrPm: string = timeString[1].substring(2);
    let hours: number = parseInt(timeString[0]);
    let minutes: number = parseInt(timeString[1].substring(0,2));
    let timeAsValues: number[] = [];

    if(hours != 12){

      if (amOrPm == "pm")
      hours += 12

    }
    timeAsValues.push(hours);
    timeAsValues.push(minutes);

    return timeAsValues;
  }

}
