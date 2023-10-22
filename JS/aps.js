(function headerScroll() {
	const header = document.querySelector('.header');
	window.onscroll = () => { /*по скролу на странице, волняется слудущее..*/
		if (window.pageYOffset > 50) { /*при скроле вниз на 50px выполняется следущее*/
			header.classList.add('header_active'); /*здесь мы передаём header свойства из header_active с помощью add*/
		} else {
			header.classList.remove('header_active'); /*здесь мы уже удаляем из header свойства header_active с помощью remove*/
		}
	}
}()); /*с помощью этой конструкции мы можем вызвать 
         данную фукции сразу, как загрузится сайт*/

//Burger handler

(function burgerClick() {
	const burgerItem = document.querySelector('.burger'); //обраемся к методу document чо бы передать блок .burger в переменную
	const menu = document.querySelector('.header_nav')
	const menuCloseItem = document.querySelector('.header_nav-close')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header_nav-active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_nav-active');
	})
}());
