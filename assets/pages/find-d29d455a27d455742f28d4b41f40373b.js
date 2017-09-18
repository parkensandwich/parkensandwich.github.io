window.initMapOnFindPage = function() {
  var myOptions = {
    center: new google.maps.LatLng(55.216056, 11.756894),
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "on" },
        ]
      },
    ],
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.216056, 11.756894),
  });

  marker.setMap(map);
}
