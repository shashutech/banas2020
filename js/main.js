var map;

function initMap() {
    var bhojpur = {
        lat: 25.4662,
        lng: 84.5222
    };
    var buxar = {
        lat: 25.5647,
        lng: 83.9777
    };
    var kaimur = {
        lat: 25.0546,
        lng: 83.6774
    };
    var rohtas = {
        lat: 25.0686,
        lng: 84.0167
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 25.5941,
            lng: 85.1376
        },
        zoom: 9
    });

    var bhojpurMarker = new google.maps.Marker({
        position: bhojpur,
        map: map
    });

    var kaimurMarker = new google.maps.Marker({
        position: kaimur,
        map: map
    });

    var buxarMarker = new google.maps.Marker({
        position: buxar,
        map: map
    });

    var rohtasMarker = new google.maps.Marker({
        position: rohtas,
        map: map
    });



    // Bhojpur Info window
    var bhojpurInfowindow = new google.maps.InfoWindow({
        content: '<h3>Bhojpur</h3><h6><a href="adminbhojpur.html">View Details</a></h6>'
    });

    bhojpurMarker.addListener('click', function () {
        bhojpurInfowindow.open(map, bhojpurMarker);
    });

    // Kaimur Info window
    var kaimurInfowindow = new google.maps.InfoWindow({
        content: '<h3>Kaimur</h3><h6><a href="adminkaimur.html">View Details</a></h6>>'
    });

    kaimurMarker.addListener('click', function () {
        kaimurInfowindow.open(map, kaimurMarker);
    });

    // Buxar Info window
    var buxarInfowindow = new google.maps.InfoWindow({
        content: '<h3>Buxar</h3><h6><a href="adminbuxar.html">View Details</a></h6>'
    });

    buxarMarker.addListener('click', function () {
        buxarInfowindow.open(map, buxarMarker);
    });

    // Rohtas Info window
    var rohtasInfowindow = new google.maps.InfoWindow({
        content: '<h3>Rohtas</h3><h6><a href="adminrohtas.html">View Details</a></h6>'
    });

    rohtasMarker.addListener('click', function () {
        rohtasInfowindow.open(map, rohtasMarker);
    });
}