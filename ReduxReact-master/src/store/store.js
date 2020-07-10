import Reducer from "../store/reducer";
import { createStore, applyMiddleware } from "redux";


const Logger = store => next => action => {
        let result = next(action)
        return result
}

const Store = createStore(Reducer, applyMiddleware(Logger));

export default Store;