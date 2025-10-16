 // Add fade-in animation on scroll
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        sections.forEach(section => {
            observer.observe(section);
        });

        // Hide navbar on scroll down, show on scroll up
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
                navbar.style.top = '-80px'; // Hide navbar
            } else {
                navbar.style.top = '0'; // Show navbar
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
