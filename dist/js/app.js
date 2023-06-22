$(document).ready(function () {

	
	// Marquee
	function Marquee(selector, speed) {
		const block = document.querySelector(selector);
		if (block) {
			const parentSelector = document.querySelector(selector);
			const clone = parentSelector.innerHTML;
			const firstElement = parentSelector.children[0];
			let i = 0;
			console.log(firstElement);
			parentSelector.insertAdjacentHTML('beforeend', clone);
			parentSelector.insertAdjacentHTML('beforeend', clone);

			setInterval(function () {
				firstElement.style.marginLeft = `-${i}px`;
				if (i > firstElement.clientWidth) {
					i = 0;
				}
				i = i + speed;
			}, 0)
		}
	}
	window.addEventListener('load', Marquee('.marquee', 0.2))


	// Search (Header)
	let searchHiddenInput = document.querySelector("#searchHiddenInput");
	let searchToggleBtn = document.querySelector("#searchToggleBtn");
	let searchBarLabel = document.querySelector("#searchBarLabel");
	searchToggleBtn.addEventListener("click", () => {
		searchBarLabel.classList.toggle("active");
		searchHiddenInput.focus();
	});

	// -------------------- burger --------------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		body = document.querySelector('body');
	/*===== MENU SHOW =====*/
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			body.classList.add('dis-scroll');
		})
	}
	/*===== MENU HIDDEN =====*/
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			body.classList.remove('dis-scroll');
		})
	}
	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')
	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu');
		body.classList.remove('dis-scroll');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));



	/*=============== Accrodion ===============*/
	const catSidebarItems = document.querySelectorAll('.catSidebar-item')
	catSidebarItems.forEach((item) => {
		const catSidebarHeader = item.querySelector('.catSidebar-title')
		const catSidebarContent = item.querySelector('.catSidebar-group')
		catSidebarContent.style.height = catSidebarContent.scrollHeight + 'px'
		item.classList.add('catSidebar-item-open')
		catSidebarHeader.addEventListener('click', () => {
			catSidebartoggleItem(item)
		})
	})
	const catSidebartoggleItem = (item) => {
		const catSidebarContent = item.querySelector('.catSidebar-group')
		if (item.classList.contains('catSidebar-item-open')) {
			catSidebarContent.removeAttribute('style')
			item.classList.remove('catSidebar-item-open')
		} else {
			catSidebarContent.style.height = catSidebarContent.scrollHeight + 'px'
			item.classList.add('catSidebar-item-open')
		}
	}


	// --------------------- Tabs ---------------------------
	// var tab = $('#tabs .tabs-items > div');
	// tab.hide().filter(':first').show();
	// // Клики по вкладкам.
	// $('#tabs .tabs-nav a').click(function () {
	// 	tab.hide();
	// 	tab.filter(this.hash).show();
	// 	$('#tabs .tabs-nav a').removeClass('active');
	// 	$(this).addClass('active');
	// 	return false;
	// }).filter(':first').click();
	// // Клики по якорным ссылкам.
	// $('.tabs-target').click(function () {
	// 	$('#tabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	// });
	// // Отрытие вкладки из хеша URL
	// if (window.location.hash) {
	// 	$('#tabs-nav a[href=' + window.location.hash + ']').click();
	// 	window.scrollTo(0, $("#".window.location.hash).offset().top);
	// }

	// -------------------- Acordion FAQ -------------------------
	const accordionItems = document.querySelectorAll('.accordion-item')
	accordionItems.forEach((item) => {
		const accordionHeader = item.querySelector('.accordion-header')
		accordionHeader.addEventListener('click', () => {
			const openItem = document.querySelector('.accordion-open')
			toggleItem(item)
			if (openItem && openItem !== item) {
				toggleItem(openItem)
			}
		})
	})
	const toggleItem = (item) => {
		const accordionContent = item.querySelector('.accordion-content')
		if (item.classList.contains('accordion-open')) {
			accordionContent.removeAttribute('style')
			item.classList.remove('accordion-open')
		} else {
			accordionContent.style.height = accordionContent.scrollHeight + 'px'
			item.classList.add('accordion-open')
		}
	}

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	// const menuBtns = document.querySelectorAll('.cldpd-btn');
	// const drops = document.querySelectorAll('.cldpd-content');
	// menuBtns.forEach(el => {
	// 	el.addEventListener('click', (e) => {
	// 		let currentBtn = e.currentTarget;
	// 		let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
	// 		menuBtns.forEach(el => {
	// 			if (el !== currentBtn) {
	// 				el.classList.remove('cldpd-btn--active');
	// 			}
	// 		});
	// 		drops.forEach(el => {
	// 			if (el !== drop) {
	// 				el.classList.remove('cldpd-content--active');
	// 			}
	// 		});
	// 		drop.classList.toggle('cldpd-content--active');
	// 		currentBtn.classList.toggle('cldpd-btn--active');
	// 	});
	// });
	// document.addEventListener('click', (e) => {
	// 	if (!e.target.closest('.cldpd')) {
	// 		menuBtns.forEach(el => {
	// 			el.classList.remove('cldpd-btn--active');
	// 		});
	// 		drops.forEach(el => {
	// 			el.classList.remove('cldpd-content--active');
	// 		});
	// 	}
	// });
	
	//--------------- fancybox -----------
	// $('[data-fancybox-popup]').fancybox({
	// 	closeExisting: true,
	// 	smallBtn: false,
	// 	toolbar: false,
	// 	autoFocus: false,
	// 	hash: false,
	// 	touch: false
	// });

	// FANCYBOX CERTIFICATE
	// ====================
	// $('[data-fancybox-certificate]').fancybox({
	// 	transitionEffect: 'fade',
	// 	animationEffect: false,
	// 	clickContent: false,
	// 	touch: true,
	// 	loop: true,
	// 	selector: '.cert-item',
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			ZOOM: 'Увеличить',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"zoom",
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });
	// $('[data-fancybox-gallery]').fancybox({
	// 	transitionEffect: 'fade',
	// 	animationEffect: false,
	// 	clickContent: false,
	// 	touch: true,
	// 	loop: true,
	// 	selector: '.gal-img',
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// $('[data-fancybox="gallery"]').fancybox({
	// 	Thumbs: false,
	// 	Toolbar: false,
	// 	Image: {
	// 		zoom: false,
	// 		click: false,
	// 		wheel: "slide",
	// 	},
	// 	backFocus: false,
	// 	lang: 'ru',
	// 	hideScrollbar: false,
	// 	i18n: {
	// 		ru: {
	// 			CLOSE: 'Закрыть',
	// 			NEXT: 'Вперёд',
	// 			PREV: 'Назад',
	// 			FULL_SCREEN: 'На весь экран',
	// 		}
	// 	},
	// 	buttons: [
	// 		"fullScreen",
	// 		"close"
	// 	]
	// });

	// ----------------- SWIPER ----------------------
	var noveltySwiper = new Swiper(".noveltySwiper", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var newsblSwiper = new Swiper(".newsblSwiper", {
		spaceBetween: 36,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var blogblSwiper = new Swiper(".blogblSwiper", {
		spaceBetween: 36,
		slidesPerView: 3,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var watchedblSwiper = new Swiper(".watchedblSwiper", {
		spaceBetween: 36,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var similarblSwiper = new Swiper(".similarblSwiper", {
		spaceBetween: 36,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var recomblSwiper = new Swiper(".recomblSwiper", {
		spaceBetween: 36,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var complectblSwiper = new Swiper(".complectblSwiper", {
		spaceBetween: 36,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	var prodSecondSwiper = new Swiper(".prodSecondSwiper", {
		loop: true,
		spaceBetween: 16,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var prodFirstSwiper = new Swiper(".prodFirstSwiper", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".product-slider .swiper-button-next",
			prevEl: ".product-slider .swiper-button-prev",
		},
		thumbs: {
			swiper: prodSecondSwiper,
		},
	});


	var swiper = new Swiper(".mySwiper", {
		// Стрелки
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// Пагинация (точки)
		// pagination: {
		// 	el: ".swiper-pagination",
		// },

		// Пагинация (динамическая)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	dynamicBullets: true,
		// },

		// Прогрессбар
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "progressbar",
		// },

		// Пагинация цифрами
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "fraction",
		// },

		// Пагинация цифрами (кастомная)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
		// 	},
		// },

		// Скроллбар
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// 	hide: true,
		// },

		// Вертикальный слайдер
		// direction: "vertical",

		// Отступ между слайдов
		// spaceBetween: 30,

		// Количество видимых слайдов
		// slidesPerView: 3,

		// Свободное количество слайдов. Можно использовать в паре с .swiper-slide {width: 80%;}
		// slidesPerView: "auto",

		// Центрирование слайда
		// slidesPerView: 3,
		// centeredSlides: true,

		// Центрирование слайда с автоматическим отображением слайдов.
		// slidesPerView: "auto",
		// centeredSlides: true,

		// cssMode (Вроде плавность пролистывания)
		// cssMode: true,
		// mousewheel: true,
		// keyboard: true,

		// Free Mode (Свободное пролистывание)
		// slidesPerView: 3,
		// spaceBetween: 20,
		// freeMode: true,

		// Grid
		// slidesPerView: 3,
		// grid: {
		// 	rows: 2,
		// },
		// spaceBetween: 30,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },

		// Бесконечное пролистывание
		// loop: true,

		// Эффект (один из нескольких)
		// effect: "coverflow",

		// Автоматичское пролистывание
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },

		// Галерея

	});

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// select 2
	jQuery('.js-example-basic-single').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#orderby').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		// containerCssClass: "select-style",
		// customClass: "select-style",
	});

	//end
});