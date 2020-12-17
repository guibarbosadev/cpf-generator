import { generateCPF } from './cpf.js';
import { copyToClipboard, triggerableKeyListener } from './helpers.js';
import { triggerableKeys }  from './config.js';

const textContainer = document.getElementById('textContainer');
const { body } = document;
const CPF = generateCPF();

textContainer.textContent = CPF;

body.addEventListener('click', () => copyToClipboard(CPF));
body.addEventListener('keyup', ({ key }) => triggerableKeyListener(key, triggerableKeys, CPF));