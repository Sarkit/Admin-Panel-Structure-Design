const barsToggle = document.getElementById('bars-toggle');
const container = document.querySelector('.container');

barsToggle.addEventListener('click', () => {
    container.classList.toggle('collapsed'); // Toggle class to adjust sidebar width
});
