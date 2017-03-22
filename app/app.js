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

  // var options =  {
  //     key: '14Z2B21W',
  //     lang: 'en'
  //   };
  // var w3w = new W3W.Geocoder(options);





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

// the following hits the w3w api and returns json object in console
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.what3words.com/v2/languages?key=14Z2B21W",
//   "method": "GET",
//   "headers": {},
// };
//
//
//   $( "#result" ).load( "ajax/test.html" );
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//
//   });

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.what3words.com/v2/forward?addr=index.home.raft&display=full&format=json&key=14Z2B21W",
    "method": "GET",
    "headers": {}
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });


// $(".map_data").click(function()  {
//   console.log('click function working')
//
// });
