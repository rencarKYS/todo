import { form } from './src/components/form.js';
import { layout } from './src/components/listLayout.js';
import formEvent from './src/utils/formEvent.js';
import { getLocalStorage } from './src/utils/localStorage.js';
import { dateParser } from './src/utils/dateParser.js';

let todos = [];
let workings = [];
let dones = [];

const root = document.querySelector('#root');
function render() {
  todos = getLocalStorage('todos') || [];
  workings = getLocalStorage('workings') || [];
  dones = getLocalStorage('dones') || [];

  root.innerHTML = `
  ${form()}
  ${layout}
`
  formEvent(todos, render)
  dateParser(new Date(), 'YYYY-MM-DD HH:mm')
  const todoEl = document.querySelector('.todo ul');
  todoEl.innerHTML = todos.join('')
}

render()