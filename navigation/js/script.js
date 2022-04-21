const openBtn = document.querySelector('.open-nav');
const closeBtn = document.querySelector('.close-nav');
const navContainer = document.querySelector('nav');

openBtn.addEventListener('click', () => {
	navContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	navContainer.classList.remove('active');
});
