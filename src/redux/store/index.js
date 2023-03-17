import { combineReducers, createStore } from "redux";
import { deleteListReducers } from "../reducers/DeleteList.reducer";
import { listReducers } from "../reducers/List.reducer";

const state = combineReducers({
   list : listReducers,
   deleteList : deleteListReducers

});

export const GlobalStore = createStore(
    state
)




