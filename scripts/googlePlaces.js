var map;
var autocomplete;
var locationsArray;
function initMap() {
    var pyrmont = {lat: -33.867, lng: 151.195};

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    var input = document.getElementById('searchTextField');
    var options = {
        types: ['(cities)']
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', getPlaces);
}

function getPlaces() {
    var place = autocomplete.getPlace();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: place.geometry.location,
        radius: 500,
        type: ['store']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        var locList = new LocationList();
        locList.showList(results);
    }
}
