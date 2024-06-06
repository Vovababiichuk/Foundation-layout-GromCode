const dropdown = document.getElementById('library');
const dropdownMenu = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');


try {
    dropdown.addEventListener('click', (event) => {
        dropdownMenu.classList.toggle('show');
				overlay.classList.toggle('overlay');
        event.stopPropagation();
    });


    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target)) {
						dropdownMenu.classList.remove('show');
						overlay.classList.remove('overlay');
        }
    });
} catch (e) {
    console.log(e);
}
