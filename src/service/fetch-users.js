const serviceMethod = async (param = 10) => {
  //сервисный файл для загрузки данных о пользователях
  const url = `https://randomuser.me/api/?results=${param}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Ошибка, HTTP статус ${response.status}`)
  }

  const data = await response.json()

  const transformedData = data?.results?.map((user) => ({
    title: user?.name?.title,
    name: user?.name?.first,
    surname: user?.name?.last,
    username: user?.login?.username,
    email: user?.email,
    date: user?.dob?.date,
    country: user?.location?.country,
    phone: user?.phone,
    login: user?.login?.password,
    id: user?.login?.uuid,
    gender: user?.gender,
    age: user?.dob?.age,
    picture: user?.picture?.large,
    password: user?.login?.password,
  }))

  return transformedData
}

export default serviceMethod
