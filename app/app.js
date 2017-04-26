var w3w_api = 'https://api.what3words.com/v2/forward?addr=index.home.raft&display=full&format=json&key=14Z2B21W';

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  });


function initMap() {
  var sanFrancisco = {lat: 37.773, lng: -122.431};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: sanFrancisco
  });
  var marker = new google.maps.Marker({
    position: sanFrancisco,
    map: map
  });
}



$('.graph').on('click', function(event) {
  $.ajax({
    method: 'GET',
    url: w3w_api,
    dataType: 'json',
    success: onClickReqSuccess
  });
});

function onClickReqSuccess (json) {
  console.log(json.map);
}

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.what3words.com/v2/forward?addr=index.home.raft&display=full&format=json&key=14Z2B21W",
    "method": "GET",
    "headers": {}
  };

  $.ajax(settings).done(function (response) {
    console.log(response.geometry.lat);
    console.log(response.geometry.lng);

  });
