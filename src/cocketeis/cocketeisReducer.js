const INITIAL_STATE = {
    drinks: []     
}

export default (state = INITIAL_STATE, action) => {   

    switch (action.type) {
        case 'COCKETEIS_REQUEST':
            return {
                ...state, 
                drinks: action.payload.drinks
            }    
        default:
            return state
    }
}