ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.93629990, 30.32115742],
    zoom: 16,
    controls: ['rulerControl']
  }, {
    suppressMapOpenBlock: true
  });

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
        bottom: '50px',
        left: '10px'
    }
  });

  myMap.controls.add('fullscreenControl', {
    float: 'none',
    position: {
        bottom: '50px',
        right: '10px'
    }
  });

  myMap.controls.remove('rulerControl');

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
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
