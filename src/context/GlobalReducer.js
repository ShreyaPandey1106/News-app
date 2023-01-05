
const GlobalReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_CITY":
            return {
                ...state,
                city: action.payload
            }
        case "SAVE_TEMP":
            return {
                ...state,
                temp: action.payload
            }
        case "SAVE_NEWS":
            return {
                ...state,
                news: action.payload
            }
        default: return state;
    }
}

export default GlobalReducer