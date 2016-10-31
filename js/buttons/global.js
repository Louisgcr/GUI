function buttonGlobal(){
    document.getElementById("dropDownBuoy").style.display = "block";
    document.getElementById("dropDownBuoy").style.zIndex = "999999999";
}

function changeTargetName(target){

    document.getElementById("targetBuoyId").textContent = "Target Buoy: " + target;

}
window.onclick = function(event){

    if (!event.target.matches('.button-global')){
        document.getElementById("dropDownBuoy").style.display = "none";
    }
}
