var ToastHelper = {
    show: function (text = '', duration = 1500) {
        const toast = document.getElementById('toast');
        toast.textContent = text;
        toast.classList.add('visible');

        setTimeout(ToastHelper.hide, duration);
    },

    hide: function () {
        const toast = document.getElementById('toast');
        toast.textContent = '';
        toast.classList.remove('visible');
    }
};