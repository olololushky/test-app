import { v4 as uuid } from 'uuid'

const generateId = (store) => (next) => (action) => {
  //генерирование уникального ключа для новых пользователей
  if (!action?.payload?.generateId) return next(action)

  const { payload, ...rest } = action
  next({
    ...rest,
    payload: {
      ...payload,
      generateId: payload.generateId.reduce(
        (acc, key) => ({ ...acc, [key]: uuid() }),
        {}
      ),
    },
  })
}

export default generateId
