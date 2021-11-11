import { generateCPF } from './cpf.js';
import { copyToClipboard, triggerableKeyListener } from './helpers.js';
import { triggerableKeys } from './config.js';

const textContainer = document.getElementById('textContainer');
const copyButton = document.getElementById('copyButton');
const CPF = generateCPF();

textContainer.textContent = CPF;

copyButton.addEventListener('click', () => copyToClipboard(CPF));
document.addEventListener('keyup', (event) =>
    triggerableKeyListener(event, triggerableKeys, CPF)
);
