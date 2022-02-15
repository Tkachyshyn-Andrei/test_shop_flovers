// Initialize and add the map
function initMap() {
    // The location of Uluru
    const center = {lat: 49.434448, lng: 26.975015};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: center,
        map,
    });
}
