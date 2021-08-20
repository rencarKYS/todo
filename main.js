import { form } from './src/components/form.js';
import { layout } from './src/components/listLayout.js';
import { card } from './src/components/card.js';

const root = document.querySelector('#root');
root.innerHTML = `
  ${form()}
  ${layout}
`
