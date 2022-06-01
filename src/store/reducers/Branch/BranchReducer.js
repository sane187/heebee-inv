export const BranchReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_BRANCHES":
      return action.branch;
    case "SET_BRANCHES":
      return "";
    default:
      return state;
  }
};
export const SingleBranchReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_SINGLE_BRANCHES":
      return action.single_branch;
    case "SET_SINGLE_BRANCHES":
      return "";
    default:
      return state;
  }
};
