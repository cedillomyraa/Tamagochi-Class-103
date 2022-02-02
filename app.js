let hunger=100;
let happiness=0;
let energy=100;


function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`Hunger ${hunger}`; 
    document.getElementById("happinessInfo").innerHTML=`Happiness ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`Energy ${energy}`;
    
}
function feed() {
   console.log("Feed"); 

   hunger=hunger-10;
   happiness=happiness+10;
   displayInfo();
   
   if(hunger<10){
    document.getElementById("hungerInfo").innerHTML=`Im Full!`; 
} else if(hunger<10){
    document.getElementById("happinessInfo").innerHTML=`Im Happy!`; 
}
}

function pet() {
    console.log("Pet");

    happiness=happiness+10;
    displayInfo();
    if(happiness>100){
        document.getElementById("happinessInfo").innerHTML=`Im Happy!`; 
    }

}
function play() {
    console.log("Play");

    energy=energy-10;
    hunger=hunger-10;
    displayInfo()

    if(energy<10){
        document.getElementById("energyInfo").innerHTML=`Im Tired!`; 
    }
}
displayInfo();