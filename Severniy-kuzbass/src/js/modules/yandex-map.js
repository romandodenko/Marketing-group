// Яндекс карта 

const mapClass = document.querySelector(".map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.60068906911417,86.24278599999995],
        zoom: 16,
      },
    );
    
    let myPlacemark = new ymaps.Placemark(myMap.getCenter(55.60068906911417,86.24278599999995), {}, {
      // iconLayout: 'default#image',
      // iconImageHref: '../../img/baloon.png',
      // iconImageSize: [20, 20],
    });
     
    myMap.geoObjects.add(myPlacemark); 
  } 
} 