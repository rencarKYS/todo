import { form } from './src/components/form.js';
import { layout } from './src/components/listLayout.js';
import { card } from './src/components/card.js';
import formEvent from './src/utils/formEvent.js';
import { getLocalStorage, setLocalStorage } from './src/utils/localStorage.js';
import { deleteFunc, moveFunc } from './src/utils/clickBtn.js';
import { dateParser } from './src/utils/dateParser.js';

let todos = [];
// let workings = [];
let dones = [];

const root = document.querySelector('#root');
function render() {
  todos = getLocalStorage('todos') || [];
  // workings = getLocalStorage('workings') || [];
  dones = getLocalStorage('dones') || [];

  root.innerHTML = `
  ${form()}
  ${layout}
`
  formEvent(todos, render)
  // dateParser(new Date(), 'YYYY-MM-DD HH:mm')
  const todoEl = document.querySelector('.todo ul');
  const doneEl = document.querySelector('.done ul');
  todoEl.innerHTML = card(todos, 'todo')
  doneEl.innerHTML = card(dones, 'done')

  const todoDelete = document.querySelectorAll('.todo .delete');
  const doneDelete = document.querySelectorAll('.done .delete');
  const moveBtn = document.querySelectorAll('.move');

  deleteFunc({
    btns: todoDelete, 
    lists: todos, 
    key: 'todos',
    render,
  })

  deleteFunc({
    btns: doneDelete, 
    lists: dones, 
    key: 'dones',
    render,
  })


  moveBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    dones.push(todos.splice(i, 1)[0])
    setLocalStorage('todos', todos)
    setLocalStorage('dones', dones)
    render()
  }))
}

render()