document.addEventListener('DOMContentLoaded', function () {
	const dropdown = document.getElementById('library');
	const dropdownMenu = document.getElementById('dropdown');
	const overlay = document.getElementById('overlay');
	const hiringListUser = document.getElementsByClassName('hiring__list-item');
	const hiringListArray = [...hiringListUser];
	const cards = document.querySelectorAll('.cards__list-link');
	const buttonsBlue = document.querySelectorAll('.button-blue');
	const buttonsWhite = document.querySelectorAll('.button-white');
	const allLinks = document.getElementsByTagName('a');

	const handleClick = e => {
		e.preventDefault();
		alert('NOW WEBSITE IS UNDER DEVELOPMENT! 💪💪💪');
	};

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
		console.log('Error with dropdown', e);
	}

	try {
	} catch (e) {
		console.log(e);
	}

	hiringListArray.forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault();
			alert('Now website is under development! 💪💪💪');
		});
	});

	const cardsListArr = [...cards];
	cardsListArr.forEach(el => {
		el.addEventListener('click', handleClick);
	});

	const buttonsBlueArr = [...buttonsBlue];
	buttonsBlueArr.forEach(el => {
		el.addEventListener('click', handleClick);
	});

	const buttonsWhiteArr = [...buttonsWhite];
	buttonsWhiteArr.forEach(el => {
		el.addEventListener('click', handleClick);
	});

	const allLinksArr = [...allLinks];
	allLinksArr.forEach(el => {
		el.addEventListener('click', handleClick);
	});
});

// swiper

const swiper = new Swiper('.mySwiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// scroll to top

document.addEventListener('DOMContentLoaded', function () {
	const scrollToTopBtn = document.getElementById('scrollToTopBtn');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 200) {
			scrollToTopBtn.style.display = 'block';
		} else {
			scrollToTopBtn.style.display = 'none';
		}
	});

	scrollToTopBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});
