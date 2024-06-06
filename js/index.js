const dropdown = document.getElementById('library');
const dropdownMenu = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');

try {
	dropdown.addEventListener('click', event => {
		dropdownMenu.classList.toggle('show');
		overlay.classList.toggle('overlay');
		event.stopPropagation();
	});

	document.addEventListener('click', event => {
		if (!dropdownMenu.contains(event.target)) {
			dropdownMenu.classList.remove('show');
			overlay.classList.remove('overlay');
		}
	});
} catch (e) {
	console.log(e);
}

// swiper

const swiper = new Swiper(".mySwiper", {
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
			el: ".swiper-pagination",
			clickable: true,
	},
});

document.addEventListener("DOMContentLoaded", function() {
	const scrollToTopBtn = document.getElementById("scrollToTopBtn");

	window.addEventListener("scroll", function() {
			if (window.scrollY > 200) {
					scrollToTopBtn.style.display = "block";
			} else {
					scrollToTopBtn.style.display = "none";
			}
	});

	scrollToTopBtn.addEventListener("click", function() {
			window.scrollTo({
					top: 0,
					behavior: "smooth"
			});
	});
});

