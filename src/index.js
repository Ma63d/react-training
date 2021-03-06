import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './containers/CommentApp';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root')
);
