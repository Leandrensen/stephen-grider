import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import streamReducer from './streamReducer';

// Reducers
// import { reducer as reduxFormReducer } from 'redux-form';
import googleAuthReducer from './googleAuthReducer';

//The keys on this objects are going to be they keys on our state object
//Basicamente este combineReducers es el que arma el "state" con las keys, y los resultados de lo que devuelven los reducers que le pasas a las keys
const appReducer = combineReducers({
    router: connectRouter(history),
    // form: reduxFormReducer,
    googleAuth: googleAuthReducer,
    streams: streamReducer,
});

// Reset redux al desloguear
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
