// Smooth Scroll for Navigation - Highlight active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Modal for Contact Form Confirmation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('id', 'thankYouModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'thankYouModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="thankYouModalLabel">Thank You!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Your message has been sent successfully. I will get back to you as soon as possible.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Show the modal
    $('#thankYouModal').modal('show');
    
    // Reset the form after submission
    event.target.reset();
});

// Optional: Scroll Animations for Project Cards
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (cardPosition < screenPosition - 100) {
            card.classList.add('animate');
        } else {
            card.classList.remove('animate');
        }
    });
});
