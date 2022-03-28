const authReducer = (state,action) => {
    switch(action.type) {
        case "TOKEN-ADD": 
        return {...state, token: action.payload.token , user: action.payload.user}
        default:
            return state
    }
}

export { authReducer }