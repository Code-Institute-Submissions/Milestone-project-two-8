
var google;

function init() {
    var myLatlng = new google.maps.LatLng( 59.334591, 18.063240);   
    var mapOptions = {
        
        zoom: 9,
        center: myLatlng,
        scrollwheel: true,
        
    };


    var mapElement = document.getElementById('map');

   
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Stockholm'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=Stockholm&key=AIzaSyB-nNMm3QeOUilp90E8kibDufs-SuoIgak', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'assets/images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);