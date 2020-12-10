const serviceMethod = async (param) => { //сервисный файл для загрузки данных о пользователях
  const url = 'https://randomuser.me/api/?results=10';
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка, HTTP статус ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default serviceMethod;
