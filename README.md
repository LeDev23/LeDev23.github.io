# ePortfolio Repository

## Description
This repository contains the source code and documentation for my ePortfolio project. The ePortfolio serves as a digital showcase of my professional skills, projects, achievements, and experiences. It is designed to be user-friendly, visually appealing, and fully responsive for optimal viewing across all devices. The purpose of this ePortfolio is to provide a central platform to highlight my capabilities to potential employers, clients, or collaborators.

The ePortfolio includes:
- A responsive navigation bar for smooth navigation.
- A header section with a profile picture and introduction.
- Sections for showcasing skills, projects, and a contact form.
- Interactive UI effects with animations and transitions.

## Technologies Used
The following technologies and tools were used to build this ePortfolio:

1. **Frontend:**
   - HTML5
   - CSS3
   - JavaScript (ES6+)
   - Bootstrap 4.6
2. **JavaScript Libraries:**
   - jQuery (for DOM manipulation)
   - Popper.js (Bootstrap dependency)
3. **Deployment:**
   - GitHub Pages / Netlify
4. **Design Tools:**
   - Formspree (for handling contact form submissions)
   - Custom CSS for hover effects and smooth animations.

## Features
- **Smooth Navigation**: Links allow smooth scrolling to different sections.
- **Interactive Header**: Profile picture with hover animations.
- **Projects Showcase**: Dynamic project cards with hover effects and external links.
- **Contact Form**: Sends user messages via Formspree with a success modal.
- **Responsive Design**: Fully compatible across mobile, tablet, and desktop devices.

## Installation Instructions
To replicate or contribute to this project, follow these steps:

### Prerequisites
Make sure you have the following installed:
- A web browser (e.g., Google Chrome, Firefox).
- A text editor (e.g., Visual Studio Code, Sublime Text).
- Git (optional for cloning the repository).

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-eportfolio.git
   cd your-eportfolio
   ```

2. **Open the Project**:
   - Open the `index.html` file directly in your browser.

3. **Run the Project**:
   No server setup is required since this is a static website.

4. **Customize**:
   - Update the `assets/` folder to include your own images.
   - Modify the `style.css` and `script.js` files to match your branding and interactivity.

## Project Structure
Below is a brief explanation of the project file structure:

```
project-root/
│
├── assets/                    # Images and resources for the portfolio
│   ├── profile.jpg            # Profile picture
│   ├── Calculogo2.JPG    # Calculator project image
│   ├── Automata.jpg           # Automata project image
│   └── Automata.jpg        # Bank system project image
│
├── index.html                 # Main HTML file
├── style.css                  # Custom CSS for styling
└── script.js                  # JavaScript file for interactivity
```

## Inline Code Documentation
Each section of the project is documented with inline comments to explain its functionality and purpose. Examples include:

### HTML Example
```html
<!-- Navbar Section -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <!-- Navigation Content -->
</nav>

<!-- About Section -->
<section id="about" class="py-5">
    <div class="container">
        <h2 class="text-center">About Me</h2>
        <!-- Skills Badges -->
    </div>
</section>
```

### CSS Example
```css
/* Project Cards - Hover Effects */
.project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
```

### JavaScript Example
```javascript
// Smooth Scroll for Navigation Links
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
```

## Contribution Guidelines
Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

To contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature/fix description"`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a pull request.


## Contact
For any questions, feedback, or suggestions, feel free to reach out:
- **Name**: Enrico Miguel T. Velasco
- **Email**: velasco.enricomiguel@gmail.com
- **GitHub**: [https://github.com/LeDev23](https://github.com/LeDev23)
