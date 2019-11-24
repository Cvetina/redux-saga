
export const GET_USERS = 'form/GET_USERS';
export const UPDATE_USERS = 'form/UPDATE_USERS';
export const UPDATE_ERROR = 'form/UPDATE_ERROR';
export const TOGGLE = 'form/TOGGLE';

const DEFAULT_STATE = {
    user: null,
    error: null
}

export default function(state=DEFAULT_STATE, action) {

    if (action.type === UPDATE_USERS) {
        return {...state, user: action.payload};
    }

    if (action.type === UPDATE_ERROR) {
        return {...state, error: action.payload};
    }
    return state;
}

export const updateUsers = (user) => ({
    type: UPDATE_USERS,
    payload: user
});

export const updateError = (err) => ({
    type: UPDATE_ERROR,
    payload: err
});

export const getUsers = () => ({ type: GET_USERS });

