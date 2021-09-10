// export const card = (data) => {
//   return `
//     <li class="card">
//       <h3>${data.title}</h3>
//       <p>${data.content}</p>
//       <p>${data.date}</p>
//     </li>
//   `
// }

export const card = (datas, key) => {
  return datas.map(data => {
    return `
      <li class="card">
        <h3>${data.title}</h3>
        <p>${data.date}</p>
        <div class="btn_group">
          <button class="${key} move">이동</button>
          <button class="${key} modify">수정</button>
          <button class="${key} delete">삭제</button>
        </div>
      </li>
    `
  }).join('')
  
}