const toggleBtn = document.querySelector(".toggle-btn");
        const navLinks = document.querySelector(".nav-links");

        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });


/* Our Learning Sessions */
var swiperCategories = new Swiper('.categories__container', {
	spaceBetween: 24,
	loop: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1026: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
		
	},
});
/* Our goal is to inspire a love for */
var swiperCategories = new Swiper('.categories__cont', {
	spaceBetween: 24,
	loop: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		880: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1026: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
		
	},
});
/* What parents say */
var swiperCategories = new Swiper('.categories__star', {
	spaceBetween: 24,
	loop: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		765: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		766: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		1900: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		
	},
});
/***blogs***/
/*var swiperCategories = new Swiper('.categories__blogs', {
	spaceBetween: 24,
	loop: true,
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		765: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		766: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		1900: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
		
	},
});*/
/*********** What parents say ************/

