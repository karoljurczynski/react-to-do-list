// INTERFACES


export interface UserInterface {
  isLogged: boolean;
  token: string;
}


// REDUCER


export const userReducer = (state: UserInterface, action: any): UserInterface => {
  switch (action.type) {
    case "SET_IS_LOGGED": return {...state, isLogged: !state.isLogged};
    case "SET_TOKEN": return {...state, token: action.newToken};
    default: return {...state};
  }
}