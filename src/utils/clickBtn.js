import { setLocalStorage } from './localStorage.js';

const deleteFunc = ({btns, lists, key, render}) => {

  btns.forEach((btn, i) => btn.addEventListener('click', () => {

    lists.splice(i, 1)
    setLocalStorage(key, lists)
    render()  
    
  }))
  
}

const moveFunc = () => {

}

export {
  deleteFunc,
  moveFunc,
}