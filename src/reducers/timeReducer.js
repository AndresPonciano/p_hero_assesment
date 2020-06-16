import moment from 'moment';

const INITIAL_STATE = {
    time: moment(),
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TIME_CHANGE':
            return {...state, time: moment()};

        default:
            return state;
    }
}