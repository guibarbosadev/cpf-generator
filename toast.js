export function show(text = '', duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.classList.add('visible');

    setTimeout(hide, duration);
}

export function hide() {
    const toast = document.getElementById('toast');

    if (toast) {
        toast.classList.add('disappearing');

        setTimeout(() => {
            toast.textContent = '';
            toast.classList.remove('visible');
            toast.classList.remove('disappearing');
        }, 200);
    }
}
