export function show(text = '', duration = 1500) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.classList.add('visible');

    setTimeout(hide, duration);
}

export function hide() {
    const toast = document.getElementById('toast');
    toast.textContent = '';
    toast.classList.remove('visible');
}
