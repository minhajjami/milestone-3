//probelem-01
function feetToMile(feet){
    if(feet <= 0 )
    {
       return 0;
    }
    else
    {
        var mile=feet/5280;
        return mile;
    }
}

var feet=12;
var result=feetToMile(feet);
console.log("Mile :",result);

//probelem-02

function woodCaculator(chair,table,bed){
    if(chair <0 || table <0 || bed <0)
    {
        return 0;
    }
    else
    {
        var chairCount=chair*1;
        var tableCount=table*3;
        var bedCount=bed*5;
        var totalWood=chairCount+tableCount+bedCount;
        return totalWood;
    }
}

var chair =5;
var table=10;
var bed=5;
var result=woodCaculator(chair,table,bed);
console.log(`Tolal amount of wood you need : ${result}`);

//probelem-03

function brickCalculator(numberOfFloor){
    
    if(numberOfFloor <=0){
        return 0;
    }
    else
    {
        var firstTenthFloorBricks=10*15*1000;
        var secondTenthFloorBricks=10*12*1000;

        if(numberOfFloor >=1 && numberOfFloor<=10){
            var totalNumberOfBricks =numberOfFloor*15*1000;
        }
        else if(numberOfFloor>=11 && numberOfFloor <=20){
            var numberOfFloor=numberOfFloor-10;
            totalNumberOfBricks=firstTenthFloorBricks+(numberOfFloor*12*1000);
        }
        else{
            var numberOfFloor=numberOfFloor-20;
            totalNumberOfBricks=firstTenthFloorBricks+secondTenthFloorBricks+(numberOfFloor*10*1000);
        }
    }

    return totalNumberOfBricks;
}

var floor=20;
var result=brickCalculator(floor);
console.log("Total amount of bricks you need : ", result);

//probelem-04

function tinyFriend(names){

    if(names==null)
    {
        return -1;
    }
    else
    {
        var shortestName=names[0];
        for(var i=1;i<names.length;i++){
            if(shortestName.length>names[i].length)
            {
                shortestName=names[i];
            }
        }

        return shortestName;
    }
}

var result=tinyFriend(['jami','abc','zubayer','rocky']);
console.log(result);
