document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Ekran Kaydırma (Scroll) Animasyonları
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => observer.observe(element));

    // 2. Dinamik Sayaç Animasyonu
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; 

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace(/\./g, ''); 
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc).toLocaleString('tr-TR');
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target.toLocaleString('tr-TR');
                        if(target > 100) counter.innerText += '+';
                    }
                };
                updateCount();
                observer.unobserve(counter); 
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
});




  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
