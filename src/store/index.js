import CreateSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddlewares = CreateSagaMiddleware();

const middlewares = [sagaMiddlewares];

const store = createStore(rootReducer, middlewares);

sagaMiddlewares.run(rootSaga);

export default store;
