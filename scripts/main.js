const openPopup = document.querySelector('.nav__popup-open');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__button-close');

openPopup.addEventListener('click', toggleClass)//пишем функцию без стрелок, чтобы она сразу не вызвалась


closePopup.addEventListener('click', () => popup.classList.toggle('popup_opened'))//можно сделать при помощи стрелочной функции в качестве кол-бека. 

function toggleClass() {//параметр event передается с addEventListener. 
  popup.classList.toggle('popup_opened');// .toggle() позволяет отобразить или скрыть выбранные элементы. 
  // Если элемент изначально отображается, то он будет скрыт, если элемент скрыт, то он будет отображен.
}

popup.addEventListener('click', function (event) {
  console.log('target :', event.target);//сюда попадает тот элемент, по которому кликнули
  console.log('currentTarget :', event.currentTarget);//тот элемент, на который мы повесили addEventListener. То есть класс .popup, который лежит в переменной popup
  if(event.target === event.currentTarget) {
    toggleClass();
  }
})

