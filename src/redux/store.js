
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer, { productsReducer } from './reducers'

const store = createStore(
    productsReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;