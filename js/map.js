const OPEN_SOURCE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const map = L.map('map-canvas', { minZoom: 15 }).setView({ lat: 59.929815, lng: 30.323436 }, 22);
const marker = L.marker({ lat: 59.929630, lng: 30.323443 }, { draggable: false });

const customOptions = {
  closeOnClick: true,
  autoClose: false
}

const popup = L.popup(customOptions)
  .setLatLng([59.929630, 30.323443])
  .setContent(`
  <img src="img-big/XXXL.webp" />
  <div class="custom-popup">
    <div>
      <h3>
        Бар "Bloody Mary <br>
        Bar&Grill"
      </h3>
        <p>4,8 <span>★★★★</span><span class="last-star">★</span>
        <a class="reviews-link" style="color: #ccc" target="_blank" 
          href="https://yandex.ru/maps/org/bloody_mary_bar_grill/1758744406/reviews/?ll=30.323411%2C59.929614&tab=reviews&z=16.14">(642)</a>
        </p>
        <br>
        <p>Бар ₽₽</p>
    </div>
    <div class="logo-popup">
      <img src="images/logo.png" />
    </div>
  </div>
`);
L.tileLayer(OPEN_SOURCE_MAP, { attribution: MAP_ATTRIBUTE }).addTo(map);

popup.addTo(map);