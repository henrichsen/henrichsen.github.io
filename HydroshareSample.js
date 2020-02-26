
//var map = L.map('mapid').setView([40.300504,-111.702573], 13);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);
var map = L.map('mapid').setView([40.300504,-111.702573], 3)
  L.esri.basemapLayer('Topographic').addTo(map);
//var map = L.map(mapDiv, mapOptions);

var Layers = {
Countries: L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-df764c1b532e43b6b093acf94917040a/wms',
    {
    layers: 'Countries', //Title name
    format: 'image/png', //depends on what you want to load in
    transparent: true,
}),
Cities: L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-df764c1b532e43b6b093acf94917040a/wms',
    {
    layers: 'Cities',
    format: 'image/png', //depends on what you want to load in
    transparent: true,
    })};

L.control.layers(Layers).addTo(map);
Layers.Countries.addTo(map);
Layers.Cities.addTo(map);
