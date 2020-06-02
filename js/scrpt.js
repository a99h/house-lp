function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.787330, lng: 49.121805},
        zoom: 17
    });
    let marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}