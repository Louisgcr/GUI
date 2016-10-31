function buttonTurnMotorOn(){
    var text =  document.getElementById("targetBuoyId").textContent;
    text = text.replace('Target Buoy: ', "");
    
    document.getElementById("buttonMotorOn").style.backgroundColor = "#f44336";
    document.getElementById("buttonMotorOff").style.backgroundColor = "white";

}

function buttonTurnMotorOff(){
    var text =  document.getElementById("targetBuoyId").textContent;
    text = text.replace('Target Buoy: ', "");
    console.log(text);
    document.getElementById("buttonMotorOff").style.backgroundColor = "#f44336";
    document.getElementById("buttonMotorOn").style.backgroundColor = "white";

}
