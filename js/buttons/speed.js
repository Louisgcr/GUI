function formChangeSpeedValue(){
    var text = document.getElementById("setSpeed").value;

    if (text > 100.0){
        text = 100.0;
    }

    if (text < 0.0){
        text = 0.0;
    }
    document.getElementById("buoySpeedSetting").textContent = "Current Speed:" + text + "%";
}
