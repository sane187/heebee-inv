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