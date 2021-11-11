import { generateCPF, maskCPF } from '../cpf.js';
import { copyToClipboard, triggerableKeyListener } from '../helpers.js';
import { triggerableKeys } from '../config.js';

const textContainer = document.getElementById('textContainer');
const copyButton = document.getElementById('copyButton');
const CPF = generateCPF();
const maskedCPF = maskCPF(CPF);

textContainer.textContent = maskedCPF;

copyButton.addEventListener('click', () => copyToClipboard(maskedCPF));
document.addEventListener('keyup', (event) =>
    triggerableKeyListener(event, triggerableKeys, maskedCPF)
);
