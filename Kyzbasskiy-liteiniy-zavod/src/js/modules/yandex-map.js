// Яндекс карта
 
const mapClass = document.querySelector(".footer-bottom__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.33429606938006,85.97935500000001],
        zoom: 16,
      },
    ); 

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.33429606938006,85.97935500000001), {}, { // Если нужно чтобы точка была слегка смещена
      // iconLayout: 'default#image',
      // iconImageHref: '../../img/baloon.png',
      // iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark); 
  } 
}
 