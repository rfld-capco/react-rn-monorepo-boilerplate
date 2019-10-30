import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import API from 'shared/services/';
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();

const services = {
    api: API
};

export const configureStore = (preloadedState, API) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(thunk.withExtraArgument(services), apiMiddleware)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('shared/redux/reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    store.api = API;

    return store;
};

export default configureStore;
