// ACTIONS


export const setIsLogged = (isLogged: boolean): {type: string, isLogged: boolean} => {
  return {
    type: "SET_IS_LOGGED",
    isLogged: isLogged
  }
}
export const setToken = (newToken: string): {type: string, newToken: string} => {
  return {
    type: "SET_TOKEN",
    newToken: newToken
  }
}