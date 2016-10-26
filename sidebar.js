function side_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    resize();
}
function side_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
    resize();
}

function resize(){
    console.log("resized function");
    var canvas = document.getElementById("FieldCanvas");
    if (canvas.width  < window.innerWidth)
    {
        canvas.width  = window.innerWidth;
    } 
    if (canvas.height < window.innerHeight)
    {
        canvas.height = window.innerHeight;
    }
}
