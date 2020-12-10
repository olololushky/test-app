export const findMatch = (value, searchParam) => { //сервисный файл для поиска совпадений в объекте юзера
  if (typeof value === 'object' && value !== null) {
    return Object.values(value).find((val) => findMatch(val, searchParam))
  }
  if (
    typeof value === 'string' &&
    String(value).includes(searchParam)
  ) {
    return true
  }
}