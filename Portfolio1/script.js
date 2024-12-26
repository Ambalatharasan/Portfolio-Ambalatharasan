
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.querySelector('.menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            document.addEventListener('click', (e) => {
                if (!e.target.closest('nav')) {
                    navLinks.classList.remove('active');
                }
            });
        
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navLinks.classList.remove('active');
                });
            });
        
            const contactForm = document.querySelector('.contact-form');
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
            
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                
                if (!name || !email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
        
                try {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    alert('Message sent successfully!');
                    contactForm.reset();
                } catch (error) {
                    alert('Failed to send message. Please try again later.');
                    console.error('Form submission error:', error);
                }
            });
            try {
                particlesJS('particles-js', {
                    particles: {
                        number: { 
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: { 
                            value: '#00ff9d' 
                        },
                        shape: { 
                            type: 'circle' 
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#00ff9d',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            push: {
                                particles_nb: 4
                            }
                        }
                    },
                    retina_detect: true
                });
            } catch (error) {
                console.error('Error initializing particles.js:', error);
                document.body.style.backgroundColor = '#0a192f';
            }
        });