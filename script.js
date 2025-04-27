const modeToggle = document.getElementById('modeToggle');
const htmlElement = document.documentElement;

modeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    modeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
});
