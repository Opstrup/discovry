$('#create-route-button').click(function () {
    $('#map').css('display', 'block');
    $('#main-container').css('display', 'none');
    google.maps.event.trigger(map, 'resize');
    locList.getPlan().forEach(function (place) {
        createMarker(place);
    });
    // map.setCenter(new google.maps.LatLng(locList.getPlan()[0]));
});

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}
