import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import cartCounter from './middleware/cartCounter';
import rootReducer from './reducers/rootReducer';
import logger from "redux-logger";
import thunk from "redux-thunk"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, logger, thunk)));

export default store;