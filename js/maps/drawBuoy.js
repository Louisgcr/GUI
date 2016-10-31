function drawBuoy(buoyCoordinate, buoyColor){
    var circle = L.circle(buoyCoordinate, {
        color: buoyColor,
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(mymap);

}
