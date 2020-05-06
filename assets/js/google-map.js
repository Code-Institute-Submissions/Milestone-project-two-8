
var google;

   function initMap() {

  var Stockholm = {lat: 59.334591, lng: 18.063240};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: Stockholm});

  var marker = new google.maps.Marker({position: Stockholm, map: map});
}