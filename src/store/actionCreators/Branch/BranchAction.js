import axios from "axios";
import { toast } from "react-toastify";

export const getBranches = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/webpos/get_branch`,
        {
            headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdGNoZW5AZ21haWwuY29tIiwiaWF0IjoxNjUwMDg0NDU0LCJleHAiOjE2NTI2NzY0NTR9.iVHTT7177Ti9Cx4tvBxtQxC2nZSo65U335bawX4SBh8"}
        })
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