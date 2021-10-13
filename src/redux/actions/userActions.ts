// ACTIONS


export const setIsLogged = (): {type: string} => {
  return {
    type: "SET_IS_LOGGED"
  }
}
export const setToken = (newToken: string): {type: string, newToken: string} => {
  return {
    type: "SET_TOKEN",
    newToken: newToken
  }
}