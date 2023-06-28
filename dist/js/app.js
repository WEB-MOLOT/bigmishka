$(document).ready(function () {

	var paralaxes = document.querySelectorAll(".paralax");
	var moveCoef = 0.5;
	window.addEventListener("scroll", scroll);
	window.addEventListener("resize", scroll);
	scroll();
	function scroll() {
		for (var i = 0; i < paralaxes.length; i++) {
			var paralax = paralaxes[i];
			var r = paralax.getBoundingClientRect();
			var paralaxYCenter = r.y + r.height / 2;
			var scrollYCenter = window.innerHeight / 2;
			var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;
			paralax.style.backgroundPositionY = move + "px";
		}
	} 

	// Search (Header)
	let searchHiddenInput = document.querySelector("#searchHiddenInput");
	let searchToggleBtn = document.querySelector("#searchToggleBtn");
	let searchBarLabel = document.querySelector("#searchBarLabel");
	searchToggleBtn.addEventListener("click", () => {
		searchBarLabel.classList.toggle("active");
		searchHiddenInput.focus();
	});
	window.onscroll = () => {
		searchBarLabel.classList.remove("active");
	}

	// -------------------- burger --------------------------
	const burgerMenu = document.getElementById('burger-menu');
	const burgerToggle = document.getElementById('burger-toggle');
	const headerToggle = document.querySelector('.header-mob');
	const cartMenu = document.getElementById('cart-menu');
	const cartToggle = document.getElementById('cart-toggle');
	let isMenuOpen = false;
	headerToggle.addEventListener('click', () => {
		if (!isMenuOpen) {
			headerToggle.classList.add('active');
			isMenuOpen = true;
		} else {
			headerToggle.classList.remove('active');
			isMenuOpen = false;
		}
		if (burgerMenu.classList.contains('show-menu-panel') || cartMenu.classList.contains('show-menu-panel')) {
			headerToggle.classList.add('active');
			isMenuOpen = true;
		}
	});
	if (burgerToggle) {
		burgerToggle.addEventListener('click', () => {
			burgerMenu.classList.toggle('show-menu-panel');
			burgerToggle.classList.toggle('active');
			cartMenu.classList.remove('show-menu-panel');
			cartToggle.classList.remove('active');
		});
	}
	if (cartToggle) {
		cartToggle.addEventListener('click', () => {
			cartMenu.classList.toggle('show-menu-panel');
			cartToggle.classList.toggle('active');
			burgerMenu.classList.remove('show-menu-panel');
			burgerToggle.classList.remove('active');
		});
	}
	document.addEventListener('click', function (e) {

		var target = e.target;

		if (!burgerMenu.contains(target) && !cartMenu.contains(target) && !headerToggle.contains(target)) {
			burgerMenu.classList.remove('show-menu-panel');
			burgerToggle.classList.remove('active');
			cartMenu.classList.remove('show-menu-panel');
			cartToggle.classList.remove('active');
			headerToggle.classList.remove('active');
			isMenuOpen = false;
		}
	});
	const burgerLink = document.querySelectorAll('.nav-list a, .green-link, .header-contacts a, .menu-list .menu-item');
	const linkAction = () => {
		burgerMenu.classList.remove('show-menu-panel');
		cartMenu.classList.remove('show-menu-panel');
	};
	burgerLink.forEach(n => n.addEventListener('click', linkAction));


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


	// ----------------- SWIPER ----------------------
	var noveltySwiper = new Swiper(".noveltySwiper", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var newsblSwiper = new Swiper(".newsblSwiper", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			500: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 24
			},
			1025: {
				spaceBetween: 36
			}
		}
	});
	var blogblSwiper = new Swiper(".blogblSwiper", {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			500: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 24
			},
			1025: {
				spaceBetween: 36
			}
		}
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


	// select 2
	jQuery('.js-example-basic-single').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#orderby').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
	});
	jQuery('#regionSelect, #countrySelect, #regionSecondSelect, #countrySecondSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Выберите'
	});
	jQuery('#regionCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Регион/Уезд'
	});
	jQuery('#countryCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Страна'
	});
	jQuery('#deliveryVariantCartSelect').select2({
		minimumResultsForSearch: Infinity,
		dropdownPosition: 'below',
		placeholder: 'Посылочный автомат'
	});
	// jQuery('#countrySelect').select2({
	// 	minimumResultsForSearch: Infinity,
	// 	dropdownPosition: 'below',
	// 	placeholder: 'Выберите'
	// });


	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
		$('body').addClass('dis-scroll');
	});
	$('.close, .button-close').on('click', function (event) {
		$(this).parents().removeClass('active');
		$('body').removeClass('dis-scroll');
	});
	// $('.button-close').on('click', function (event) {
	// 	$(this).parents().removeClass('active');
	// 	$('body').removeClass('dis-scroll');
	// });
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			var select = $(".select2-container");
			if (!div.is(e.target)// если клик был не по нашему блоку
				&& div.has(e.target).length === 0 // и не по его дочерним элементам
				&& (!select.is(e.target)
					&& select.has(e.target).length === 0
					&& !$(e.target).closest('.select2-selection, .select2-search, .select2-container, .select2-results__option').length)) { // и не по элементам с классом select2-selection и select2-search
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('dis-scroll');
			}
		});
	});
	//end
});