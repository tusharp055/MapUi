// store.js
import { createStore } from 'redux';
import rootReducer from './store/reducers'; // Ensure you have the correct path here

const store = createStore(rootReducer); // You might also have middleware, enhancers, etc.

export default store;
