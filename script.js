// Typing Effect
const typedTextSpan = document.querySelector(".typing");
const words = ["I am not a Programmer", "I am not a UI/UX Designer", "I am not a Developer"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1500; // Delay between words

function type() {
    if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) setTimeout(type, newWordDelay);
});

// Handle Contact Form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    this.reset();
});
