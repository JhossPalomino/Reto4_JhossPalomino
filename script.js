const toggleInput = document.getElementById('toggle-input');
toggleInput.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggleInput.checked);
});