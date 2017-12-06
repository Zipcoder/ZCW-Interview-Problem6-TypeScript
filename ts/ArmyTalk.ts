class ArmyTalk {
    
    verbalizeHours = function (hours:number){
        var output="";
        if(hours < 10){
            output += "Zero " + LiteralNums[hours];
        }else if (hours> 20){
            output += LiteralNums[hours-hours%10] + "-"+ LiteralNums[hours%10]; 
        }else if (hours >10){
            output += LiteralNums[hours];
        }
        return output+" Hundred";
        }
    
    verbalizeMinutes = function (minutes:number){
        var output="";
        if(minutes == 0){
        }else if(minutes <10){
            output += " and Zero "+LiteralNums[minutes];
        }
        else if(minutes<21 || minutes%10==0){
            output +=" and " + LiteralNums[minutes];
        }else{
            output += " and "+ LiteralNums[minutes-minutes%10] + "-"+ LiteralNums[minutes%10];
        }
        output += " hours";
    
        return output;
        }
    
    }