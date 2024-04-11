let lat=45.9369;
let lng=7.86675;
let zoom = 13;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});
L.control.scale().addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([45.9369, 7.86675]).addTo(map);
marker.bindPopup("<b>Dufourspitze</b><br>4634 m").openPopup();

//marker zeigen
console.log(marker)

/*
let age = 10;
console.log(age)
*/

let absatz = "Hallo Welt!";
let number = 6;

console.log(`
    <h3>Test für's "Tutorial"</h3>
    <p>${absatz}</p>
    <div id="map"></div>`);