import axios from "axios";
import { toast } from "react-toastify";

export const getBranches = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/franchise/get_branch`,
        )
         .then(branch => {
            dispatch({
                type: "GET_BRANCHES",
                branch
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}
export const getSingleBranch = (branch_id) => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/franchise/get_single_branch?branch=${branch_id}`,
        )
         .then(single_branch=> {
            dispatch({
                type: "GET_SINGLE_BRANCHES",
                single_branch:single_branch.data
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}