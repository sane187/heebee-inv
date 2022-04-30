import axios from "axios";
import { toast } from "react-toastify";

export const getBranches = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/webpos/get_branch`,
        {
            headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2l0YTAxQGdtYWlsLmNvbSIsImlhdCI6MTY1MTMwMjQ5NCwiZXhwIjoxNjUzODk0NDk0fQ.Qt_09znFxYqCX20fMNwYKiwyGboBSPQ2FzgASmxmAx4"}
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