const serviceMethod = async (param) => {
  //  const url = 'https://jsonplaceholder.typicode.com/users';
  const url = 'https://randomuser.me/api/?results=10';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка, HTTP статус ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default serviceMethod;
