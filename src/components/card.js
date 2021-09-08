// export const card = (data) => {
//   return `
//     <li class="card">
//       <h3>${data.title}</h3>
//       <p>${data.content}</p>
//       <p>${data.date}</p>
//     </li>
//   `
// }

export const card = (data) => {
  return `
    <li class="card">
      <h3>${data.title}</h3>
      <p>${data.date}</p>
      <div class="btn_group">
        <button class="move">이동</button>
        <button class="modify">수정</button>
        <button class="delete">삭제</button>
      </div>
    </li>
  `
}