function formSetDataRate(){
    var rate = document.getElementById("setRate").value;

    //If rate is not a number, set rate to default
    if (isNaN(parseFloat(rate)) && isFinite(rate) ){
        rate = 10.0;
    }

    //Set lower limit of data rate to be 10Hz
    if (rate < 0.1){
        rate = 0.1;
    }

    document.getElementById("spanSetDataRate").textContent = "Current Data Rate: " + rate;

}
