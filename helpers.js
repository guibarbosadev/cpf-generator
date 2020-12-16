import { show } from './toast.js';

export function copyToClipboard(text = "") {
    const textarea = document.createElement('textarea');

    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999999px';
    textarea.setAttribute('readonly', '');

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    show('Copiado!');
}