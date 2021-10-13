// IMPORTS


import { createStore, combineReducers} from 'redux';
import { UserInterface } from '../reducers/userReducer';
import { userReducer } from '../reducers/userReducer';
import { ListInterface } from '../reducers/listReducer';
import { listReducer } from '../reducers/listReducer';


// INTERFACES


export interface StateInterface {
  user: UserInterface;
  lists: ListInterface[];
}


// COMBINE REDUCERS


const combinedReducers = combineReducers({
  user: userReducer,
  lists: listReducer
});


// STORE


const store = createStore(combinedReducers)


// EXPORT


export default store;