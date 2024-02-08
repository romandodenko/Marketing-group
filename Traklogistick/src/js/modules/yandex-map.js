// Яндекс карта

const mapClass = document.querySelector(".footer-content__wrapper-map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.354988069373945,86.02150349999995],
        zoom: 14,
      },
    );
    // var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.354988069373945,86.02150349999995), {}, { // Если нужно чтобы точка была всегда по центру
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.354988069373945,86.02150349999995), {}, {});

    myMap.geoObjects.add(myPlacemark);
  }
}