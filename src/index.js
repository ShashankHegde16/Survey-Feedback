import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(reduxThunk));
const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );

}

ReactDOM.render(<Main />, document.querySelector('#root'));