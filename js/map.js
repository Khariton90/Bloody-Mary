const OPEN_SOURCE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const map = L.map('map-canvas', {minZoom: 15}).setView({lat:59.929630, lng:30.323443}, 22);
const marker = L.marker({lat:59.929630, lng:30.323443}, { draggable: false });

const popup = L.popup({closeOnClick: true,autoClose: true}).setLatLng([59.929630, 30.323443]).setContent("I am a standalone popup.");
L.tileLayer(OPEN_SOURCE_MAP, { attribution: MAP_ATTRIBUTE }).addTo(map);

popup.addTo(map);