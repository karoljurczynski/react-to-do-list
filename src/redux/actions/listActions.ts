// IMPORTS


import { ListInterface } from "../reducers/listReducer"


// ACTIONS


export const clearLists = (): {type: string} => {
  return {
    type: "CLEAR_LISTS",
  }
}
export const addList = (newList: ListInterface): {type: string, newList: ListInterface} => {
  return {
    type: "ADD_LIST",
    newList: newList
  }
}