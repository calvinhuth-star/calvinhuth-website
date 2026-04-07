
    // Sound Toggle
    const heroVideo = document.getElementById('heroVideo');
    const soundToggle = document.getElementById('soundToggle');
    
    soundToggle.addEventListener('click', () => {
      heroVideo.muted = !heroVideo.muted;
      soundToggle.classList.toggle('unmuted', !heroVideo.muted);
    });

    // Navigation Dots
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section[id]');

    navDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.target);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Update active dot on scroll
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-10% 0px -10% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navDots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.target === entry.target.id);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  