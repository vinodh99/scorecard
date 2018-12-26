import { createStore } from 'redux';
import reducer from '../reducers';

const configureStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducer)
        // runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;
// redux saga is a library that aims to make side effects in react-redux applications easier and better