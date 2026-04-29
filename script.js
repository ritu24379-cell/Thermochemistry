// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    follower.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

// Heat Transfer Calculator
function calculateHeat() {
    const mass = document.getElementById('mass').value;
    const specHeat = document.getElementById('specHeat').value;
    const tempChange = document.getElementById('tempChange').value;
    const resultBox = document.getElementById('resultBox');
    const qResult = document.getElementById('qResult');

    if (mass && specHeat && tempChange) {
        const q = mass * specHeat * tempChange;
        qResult.innerText = q.toLocaleString(undefined, { maximumFractionDigits: 2 });
        resultBox.style.display = 'block';
        
        // Success animation
        resultBox.style.animation = 'none';
        resultBox.offsetHeight; 
        resultBox.style.animation = 'reveal 0.5s forwards';
    } else {
        alert('Please provide all parameters for accurate calculation.');
    }
}
