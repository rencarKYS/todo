export const card = (data) => {
  return `
    <li class="card">
      <h3>${data.title}</h3>
      <p>${data.content}</p>
      <p>${data.date}</p>
    </li>
  `
}