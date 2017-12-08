class MilitaryTime{
    displayEle: any;
    userInputEle:any;
    constructor(){
        this.displayEle=document.getElementById("display");
        this.userInputEle=document.getElementById("user_input");
    }
    convertTo24Hours(input:string):string{
        let hourMinute:string[]=input.split(":");
        let hour:number = Number(hourMinute[0]);
        if(hourMinute[1].indexOf("AM")!=-1 && hour<10){
            hourMinute[0]="0"+hour;
        }
        if(hourMinute[1].indexOf("PM")!==-1 && hour!=12){
            hourMinute[0]=(hour+=12).toString();
        }
        if(hourMinute[1].indexOf("AM")!=-1 && hour==12){
            hourMinute[0]=="00";
        }
        return hourMinute[0]+":"+hourMinute[1].substring(0,2) ;
    }
    convertToWords(input:string):string{
        let units:string[]=["Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

        let tens:string[]=["", "", "Twenty", "Thirty", "Forty", "Fifty"];

        let num: number= Number(input);
        let word: string ="";
        if(num<10){
            word+=units[0]+" "+units[num];
        }
        if(num<20 && num>=10){
            word+=units[num];
        }
        if(num>=20){
            if(num%10==0){
                word+=tens[num/10];
            }
            else{
                word+=tens[num/10]+" "+units[num%10];
            }
        }
        return word;
    }
    convertToMilitaryTime(){
        let input = this.userInputEle.value;
        let formattedInput = this.convertTo24Hours(input);
        let time:string[]=formattedInput.split(":");
        let hour:string=this.convertToWords(time[0]);
        let minute:string=this.convertToWords(time[1]);
        this.displayEle.innerHTML+=hour+" Hundred and "+minute+" Hours<br/>";

    }
    askForTime(){
        this.displayEle.innerHTML += "Please input time<br/>";
    }
    init(){
        this.askForTime();
    }

}