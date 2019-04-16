/**
 * Created by Han on 2019/4/15.
 */
export const USER_UPDATE = 'USER_UPDATE';
export const API_REQUEST_USER_ERROR = 'API_REQUEST_USER_ERROR';
export const API_REQUEST_USER_SUCCESS = 'API_REQUEST_USER_SUCCESS';

export function updateUser(newUser) {
    return {
        type: USER_UPDATE,
        payload: newUser
    }
}

function showError() {
    return {
        type: API_REQUEST_USER_ERROR,
        payload: 'ERROR'
    }
}
function fetchSuccess() {
    return {
        type: API_REQUEST_USER_SUCCESS,
        payload: 'SUCCESS'
    }
}

export function apiRequest() {
    return dispatch => {
        fetch('google.com').then(r => r).then(r => {
            dispatch(fetchSuccess());
        }).catch(e => {
            dispatch(showError())
        })
    }
}