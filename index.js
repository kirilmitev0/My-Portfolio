document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Typing effect for h1
document.addEventListener("DOMContentLoaded", function() {
    const text = "Kiril Mitev";  // Customize with your name
    let index = 0;
    
    function type() {
        if (index < text.length) {
            document.getElementById("type-text").textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);  // Adjust typing speed (100ms per letter)
        }
    }
    
    type();
});