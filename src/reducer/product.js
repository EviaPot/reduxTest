/**
 * Created by Han on 2019/4/15.
 */
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';
export default (state = '', {type, payload}) => {
    switch (type) {
        case PRODUCT_UPDATE:
            return payload;
        default:
            return state;
    }
};