import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {searchRobots,requestRobots} from './reducers.js';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';

const rootReducer=combineReducers({searchRobots,requestRobots})
const store= createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(<div>
                    <Provider store={store}>
                      <App />
                    </Provider>
                </div>
  , document.getElementById('root'));
registerServiceWorker();
