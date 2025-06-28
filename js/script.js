// Wait until the whole page is loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log('Website is loaded and ready!');
});

const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! Your message has been sent');
        form.reset();
    });
}