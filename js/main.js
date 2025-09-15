const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('.nav');

if (menuBar && nav) {
    menuBar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// FAQ Toggle Functionality
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const allFaqItems = document.querySelectorAll('.faq-answer');
        const allButtons = document.querySelectorAll('.toggle-btn');

        const faqItem = button.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');

        const isAlreadyActive = answer.classList.contains('active');

        // Close all FAQ answers and reset button text
        allFaqItems.forEach(a => a.classList.remove('active'));
        allButtons.forEach(b => (b.textContent = '+'));

        // If it wasn’t active before, open it now
        if (!isAlreadyActive) {
            answer.classList.add('active');
            button.textContent = '-';
        }
    });
});



