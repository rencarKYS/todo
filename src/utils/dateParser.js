export const dateParser = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  
  return `${year}.${month}.${date} ${hour}:${minute}`
}
// const parseDay = (day) => {
//   const arr = ['일', '월', '화', '수', '목', '금', '토']
//   return arr[day]
// }

// const double = (value) => {
//   String(value).length < 2 ? `0${value}` : value
// }

// export const dateParser = (date, format) => {
//   const matches = {
//     YY: String(date.getFullYear()).slice(-2),
//     YYYY: date.getFullYear(),
//     M: date.getMonth() + 1,
//     MM: double(date.getMonth() + 1),
//     D: date.getDate(),
//     DD: double(date.getDate()),
//     H: date.getHours(),
//     HH: double(date.getHours()),
//     // h: ,
//     // hh: ,
//     m: date.getMinutes(),
//     mm: double(date.getMinutes()),
//   }
//   console.log(date.getFullYear())
//   console.log(date.getMonth() + 1)
//   console.log(date.getDate())
//   console.log(date.getHours())
//   console.log(date.getMinutes())
//   console.log(parseDay(date.getDay()))
// }