export const findMatch = (value, searchParam) => {
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