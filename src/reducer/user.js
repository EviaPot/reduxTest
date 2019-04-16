/**
 * Created by Han on 2019/4/15.
 */
import {USER_UPDATE, API_REQUEST_USER_SUCCESS,API_REQUEST_USER_ERROR} from '../action/userAction';

export default (state = '', {type, payload}) => {
    switch (type) {
        case USER_UPDATE:
        case API_REQUEST_USER_ERROR:
        case API_REQUEST_USER_SUCCESS:
            return payload;
        default:
            return state;
    }
};