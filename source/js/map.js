ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.93629990, 30.32115742],
    zoom: 16,
    controls: ['zoomControl',  'fullscreenControl']
  }, {
    suppressMapOpenBlock: true
  }),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Мы находимся тут',
    balloonContent: 'Санкт-Петербург, ул. Большая Конюшенная, 19/8.'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-marker.svg',
    iconImageSize: [36, 36],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
});
