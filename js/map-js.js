mapboxgl.accessToken = 'pk.eyJ1IjoiY2t3YW4iLCJhIjoiY2phYm9rM21qMDF6YjMzbnE5ZjFvczg0OCJ9.1M72umBUN-c9ZJrqhR7k-A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-176.647509, -41.479852],
  zoom: 4.5
});

var pinData = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [172.447124, -40.850166]
    },
    properties: {
      title: 'Mapbox',
      description: 'heaphy-start'
    }
  },
  {
   type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [167.911705, -44.786143]
    },
    properties: {
      title: 'Mapbox',
      description: 'milford-start'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [172.974627, -40.786825]
    },
    properties: {
      title: 'Mapbox',
      description: 'abel-tasman'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [175.580907, -39.144277]
    },
    properties: {
      title: 'Mapbox',
      description: 'Tongariro-start'
    }
  }]
};

// add markers to map
document.getElementById("pin").addEventListener('click', showTongariroPin, false); 
document.getElementById("pin2").addEventListener('click', showAbelPin, false); 
document.getElementById("pin3").addEventListener('click', showMilfordPin, false); 
document.getElementById("pin4").addEventListener('click', showHeaphyPin, false); 

 function showTongariroPin() {
  // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker tongariroMark';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(pinData.features[3].geometry.coordinates)
    .addTo(map);

    $(".abelMark").hide();
    $(".milfordMark").hide();
    $(".heaphyMark").hide();
}

function showAbelPin() {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker abelMark';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(pinData.features[1].geometry.coordinates)
    .addTo(map);

    $(".tongariroMark").hide();
    $(".milfordMark").hide();
    $(".heaphyMark").hide();
}

function showMilfordPin() {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker milfordMark';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(pinData.features[2].geometry.coordinates)
    .addTo(map);

    $(".tongariroMark").hide();
    $(".abelMark").hide();
    $(".heaphyMark").hide();
}

function showHeaphyPin() {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker heaphyMark';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(pinData.features[0].geometry.coordinates)
    .addTo(map);

    $(".tongariroMark").hide();
    $(".abelMark").hide();
    $(".milfordMark").hide();
}



