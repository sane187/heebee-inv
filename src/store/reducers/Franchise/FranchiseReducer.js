const FranchiseReducer = (state ="", action) => {
    switch (action.type) {
        case "ADD_FRANCHISE":
            return state;
        case "GET_FRANCHISE":
            return action.franchise          
        default:
            return state;
    }
}
export default FranchiseReducer