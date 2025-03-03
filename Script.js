

    const buttons = document.querySelectorAll('.toggle-description');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.nextElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Hide Responsibilities';
            } else {
                description.style.display = 'none';
                this.textContent = 'Show Responsibilities';
            }
        });
    });

    // Smooth scrolling
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll progress indicator
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        document.querySelector('.scroll-progress').style.width = scrollPercentage + '%';

        // Show or hide back-to-top button
        const backToTopButton = document.getElementById('backToTop');
        if (scrollTop > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Animate skill circles and percentages
    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
        const skillValue = circle.getAttribute('data-skill');
        const fill = circle.querySelector('.fill');
        const percentageText = circle.querySelector('.skill-percentage');
        const degree = (parseInt(skillValue) / 100) * 360; // Calculate the degree for the fill
        fill.style.transform = `rotate(${degree}deg)`; // Animate percentage display
        let currentPercentage = 0;
        const interval = setInterval(() => {
            if (currentPercentage < parseInt(skillValue)) {
                currentPercentage++;
                percentageText.textContent = currentPercentage + '%';
                percentageText.style.opacity = 1; // Fade in percentage
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust speed of percentage increase
    });

    // Carousel functionality
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.children;
    let currentIndex = 0;

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate offset for carousel
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Modal functionality
    const contactBtn = document.getElementById('contactBtn');
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close');

    contactBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Back to top functionality
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Typing effect for header
    const typedHeader = document.getElementById('typed-header');
    const text = "Ashley Lalican"; // Change this to your desired text
    let index = 0;

    function type() {
        if (index < text.length) {
            typedHeader.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type(); // Start typing effect

    // Ripple effect for buttons
    const rippleButtons = document.querySelectorAll('button');
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            setTimeout(() => {
                ripple.remove();
            }, 600); // Duration of ripple effect
        });
    });