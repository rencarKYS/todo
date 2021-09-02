import { dateParser } from './dateParser.js';

export default function formEvent() {
  console.log('form')
  const title = document.querySelector('.title');
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obj = {
      title: title.value,
      time: dateParser(),
    }
    console.log(obj)
  })
}


// import { card } from '../components/card.js';
// import { setLocalStorage } from '../utils/localStorage.js';

// export default function formEvent(todos, render) {
//   const formEl = document.querySelector('form');
//   const title = document.querySelector('.title');
//   const description = document.querySelector('.description');
//   const todo = document.querySelector('.todo ul');

//   formEl.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (!title.value) {
//       return alert('할일 제목을 입력해주세요.')
//     } 
//     if (!description.value) {
//       return alert('할일 내용을 입력해주세요.')
//     }

//     const obj = {
//       title: title.value,
//       content: description.value,
//       date: new Date(),
//     }

//     const cardEl = card(obj);

//     title.value = null;
//     description.value = null;

//     todos.push(cardEl)
//     setLocalStorage('todos', todos)
//     render()
//   })
// }