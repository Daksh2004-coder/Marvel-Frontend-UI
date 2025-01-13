// Get all dots
const dots = document.querySelectorAll('.scroll-navigation .dot');

// Add click event to each dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove active class from all dots
        dots.forEach(d => d.classList.remove('active'));

        // Add active class to clicked dot
        dot.classList.add('active');

        // Scroll to a specific section (optional)
        const section = document.querySelector(`#section-${index + 1}`);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Define the number display
    const activeNumber = document.querySelector('.active-number');

    // Update the active dot and displayed number
    if (scrollPosition < 800) {
        setActiveDot(0, activeNumber);
    } else if (scrollPosition >= 800 && scrollPosition < 1300) {
        setActiveDot(1, activeNumber);
    } else if (scrollPosition >= 1300 && scrollPosition < 1800) {
        setActiveDot(2, activeNumber);
    } else {
        setActiveDot(3, activeNumber);
    }
});

// Set active dot and update the number at the top
function setActiveDot(index, numberElement) {
    // Update active class for dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update the number displayed at the top with leading zero
    if (numberElement) {
        const formattedNumber = String(index + 1).padStart(2, '0'); // Adds leading zero
        numberElement.textContent = formattedNumber;
    }
}
