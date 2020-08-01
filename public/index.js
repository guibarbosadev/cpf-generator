console.log('dask');
document.addEventListener('DOMContentLoaded', () => {
    console.log('daskodsako');
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.addEventListener('click', function () {
           this.select();
           this.setSelectionRange(0, 99999);
           document.execCommand('copy');
           console.log('adskodskoa');
        })
    })
})