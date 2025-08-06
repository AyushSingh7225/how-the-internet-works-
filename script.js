document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function setDarkMode(on) {
        if (on) {
            body.classList.add('dark-mode');
            toggle.textContent = '☀️ Light Mode';
        } else {
            body.classList.remove('dark-mode');
            toggle.textContent = '🌙 Dark Mode';
        }
        localStorage.setItem('darkMode', on ? '1' : '0');
    }

    toggle.onclick = () => setDarkMode(!body.classList.contains('dark-mode'));

    if (localStorage.getItem('darkMode') === '1') setDarkMode(true);
});