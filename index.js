import { show, hide } from './toast.js';
import { generateCPF } from './cpf.js';

const container = document.querySelector('.container');
const textContainer = document.getElementById('textContainer');
const CPF = generateCPF();

textContainer.textContent = CPF;

container.addEventListener('click', function () {
    const textarea = document.createElement('textarea');

    textarea.value = CPF;
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999999px';
    textarea.setAttribute('readonly', '');

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    show('Copiado!');
});
