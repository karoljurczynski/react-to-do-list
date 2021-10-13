// INTERFACES


export interface ListInterface {
  id: string;
  name: string;
  task: TaskInterface[];
  creationDate: string;
}
export interface TaskInterface {
  name: string;
  isDone: boolean;
}


// REDUCER


export const listReducer = (state: ListInterface[] = [], action: any): ListInterface[] => {
  switch (action.type) {
    case "CLEAR_LISTS": {
      let lists: ListInterface[] = [...state];
      lists = [];
      return lists;
    }
    case "ADD_LIST": {
      let lists: ListInterface[] = [...state];
      lists.push(action.newList);
      return lists;
    }
    default: return [...state];
  }
}