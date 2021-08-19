import { sum } from './src/components/sample.js';

const root = document.querySelector('#root');
root.innerHTML = `<p>${ sum(1, 2) }</p>`