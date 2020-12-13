// export const initialUser = {
//   cell: '',
//   dob: {
//     age: null,
//     date: '',
//   },
//   email: '',
//   gender: '',
//   id: {
//     name: '',
//     value: '',
//   },
//   location: {
//     city: '',
//     coordinates: { latitude: '', longitude: '' },
//     country: '',
//     postcode: null,
//     state: '',
//     street: { number: null, name: '' },
//     timezone: { offset: '', description: '' },
//   },
//   login: {
//     md5: '',
//     password: '',
//     salt: '',
//     sha1: '',
//     sha256: '',
//     username: '',
//     uuid: '',
//   },
//   name: {
//     first: '',
//     last: '',
//     title: '',
//   },
//   nat: '',
//   phone: '',
//   picture: {
//     large: '',
//     medium: '',
//     thumbnail: '',
//   },
//   registered: {
//     age: null,
//     date: '',
//   },
// }

export const initialUser = {
  title: '',
  name: '',
  surname: '',
  username: '',
  email: '',
  date: '',
  country: '',
  phone: '',
  login: '',
  id: '',
  gender: '',
  age: '',
  picture: '',
  password: '',
}

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  initialUser,
  entities: { results: [], filteredResults: [] },
}