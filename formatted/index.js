import { generateCPF, maskCPF } from '../cpf.js';
import { copyToClipboard, triggerableKeyListener } from '../helpers.js';
import { triggerableKeys } from '../config.js';

const textContainer = document.getElementById('textContainer');
const { body } = document;
const CPF = generateCPF();
const maskedCPF = maskCPF(CPF);

textContainer.textContent = maskedCPF;

body.addEventListener('click', () => copyToClipboard(maskedCPF));
body.addEventListener('keyup', (event) =>
    triggerableKeyListener(event, triggerableKeys, maskedCPF)
);
