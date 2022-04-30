import axios from "axios";
import { toast } from "react-toastify";
export const getAllFranchise = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/webpos/get_franchise`, {
            headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2l0YTAxQGdtYWlsLmNvbSIsImlhdCI6MTY1MTMwMjQ5NCwiZXhwIjoxNjUzODk0NDk0fQ.Qt_09znFxYqCX20fMNwYKiwyGboBSPQ2FzgASmxmAx4"}
        })
         .then(franchise => {
            dispatch({
                type: "GET_FRANCHISE",
                franchise
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}
export const addNewFranch = (franchise_name,location,branchNum) => {
    return (dispatch, getState) => {
        axios.post(`${process.env.REACT_APP_API_URL}api/v1/webpos/add_new_franchise`, {
            "franchise_name": franchise_name,
            "location": location,
            "no_branches": branchNum
        })
         .then(res => {
            toast.success(`Franchise Added succesfully`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, theme: "colored"
            });
            dispatch({
                type: "ADD_FRANCHISE"
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}