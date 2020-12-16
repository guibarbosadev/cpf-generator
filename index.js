import { generateCPF } from './cpf.js';
import { copyToClipboard } from './helpers.js';

const textContainer = document.getElementById('textContainer');
const { body } = document;
const CPF = generateCPF();
const triggerKeys = ['c'];

textContainer.textContent = CPF;

function triggerKeysListenr({ key = "" }) {
    const loweredCase = key.toLowerCase();
    const shouldCopy = triggerKeys.includes(loweredCase)
    
    if(shouldCopy) {
        copyToClipboard(CPF);
    }
}

body.addEventListener('click', () => copyToClipboard(CPF));
body.addEventListener('keyup', triggerKeysListenr);