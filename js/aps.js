(function () {
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

