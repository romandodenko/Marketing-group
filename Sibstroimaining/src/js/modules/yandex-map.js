const mapClassOne = document.querySelector(".map-kem");

if (mapClassOne) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map1", {
        center: [55.42891513938625,86.22120835581967],
        zoom: 18,
      },
    );  
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.42891513938625,86.22120835581967), {}, {
      iconLayout: 'default#image',
      iconImageHref: './marker.gif',
      iconImageSize: [40, 40],
    });
    myMap.geoObjects.add(myPlacemark);
  }
}

const mapClassTwo = document.querySelector(".map-nsk");

if (mapClassTwo) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map2", {
        center: [55.05010706965637,82.94128850000003],
        zoom: 18,
      },
    );  
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.05010706965637,82.94128850000003), {}, {
      iconLayout: 'default#image',
      iconImageHref: './marker.gif',
      iconImageSize: [40, 40],
    });
    myMap.geoObjects.add(myPlacemark);
  }
}