

export const initialState = {
    gender: 'All',
    userPerRow: 10,
    userData: []
    };
    
    export const actionTypes = {
        SET_GENDER: 'SET_GENDER',
        SET_USER_PER_ROW: 'SET_USER_PER_ROW',
        SET_USER_DATA: 'SET_USER_DATA',
    };
    
    const rootReducer = (state: any = initialState, action: { type: any; payload: any; }) => {
        switch (action.type) {
            case actionTypes.SET_GENDER:
                return {
                    ...state,
                    gender: action.payload,
                };
            case actionTypes.SET_USER_PER_ROW:
                return {
                    ...state,
                    userPerRow: action.payload,
                };
            case actionTypes.SET_USER_DATA:
                return {
                    ...state,
                    userData: action.payload,
                };
    
            default:
                return state;
        }
    };
    
    export default rootReducer;