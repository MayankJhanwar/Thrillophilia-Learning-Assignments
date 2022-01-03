import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { AddToCart} from './Reducers/AddtoCart';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LoadItems } from './Reducers/LoadAllItems';

const rootReducer = combineReducers({
    cartItems: AddToCart,
    FoodItems: LoadItems
})

const store = createStore(rootReducer,  {}, composeWithDevTools(compose(applyMiddleware(thunk))));

export default store;