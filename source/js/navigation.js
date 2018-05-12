var mainMenu = document.querySelector('.main-nav');
var mainMenuToggle = document.querySelector('.page-header__nav-toggle');
var pageHeader = document.querySelector('.page-header');

pageHeader.classList.add('page-header--closed');
mainMenu.classList.add('main-nav--closed');
mainMenuToggle.classList.remove('page-header__nav-toggle--no-js');

mainMenuToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-nav--closed')) {
    mainMenu.classList.remove('main-nav--closed');
    pageHeader.classList.remove('page-header--closed');
    mainMenuToggle.classList.add('page-header__nav-toggle--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    mainMenu.classList.add('main-nav--closed');
    mainMenuToggle.classList.remove('page-header__nav-toggle--opened');
  }
});
