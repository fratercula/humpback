export default {
  async updateUserName({ dispatch, getStore }, value) {
    await new Promise((r) => setTimeout(r, 1000))
    const { user } = getStore()
    user.name = value
    dispatch({ user })
  },
  getUserName({ getStore }) {
    const { user } = getStore()
    return user.name
  },
}
