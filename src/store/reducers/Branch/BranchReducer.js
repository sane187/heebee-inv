const BranchReducer = (state="", action) => {
    switch (action.type) {
        case "GET_BRANCHES":
            return action.branch;          
        default:
            return state;
    }
}
export default BranchReducer;