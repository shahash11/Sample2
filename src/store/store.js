import {createStore} from "redux"

const CounterReducer=(state={initial:0}, action)=>{
return state;
}

const store = createStore(CounterReducer)
export default store;
