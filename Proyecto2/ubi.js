const Corde = {lat: -33.4329886, lng: -70.6830893, }
const mapDiv = document.getElementById("map");
let map;
function initMap(){
    map = new google.maps.Map(mapDiv, {
        center: Corde,
        zoom: 15,
    });
    marker = new google.maps.Marker({
        position: Corde,
        map: map,
    });
}