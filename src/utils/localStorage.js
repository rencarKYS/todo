export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage(key) {
  const getItem = localStorage.getItem(key);
  return JSON.parse(getItem)
}