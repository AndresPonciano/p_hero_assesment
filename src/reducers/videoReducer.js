

export default function( state = { "items": [] }, action) {

    switch (action.type) {
        case 'FETCH_VIDEOS':
            return [ action.payload.data.items ];
        default:
            return state;
    }
}