import axios from "axios";
import { toast } from "react-toastify";
export const getAllProducts= () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/webpos/get_all_products`, {
            headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpdGNoZW5AZ21haWwuY29tIiwiaWF0IjoxNjUwMDg0NDU0LCJleHAiOjE2NTI2NzY0NTR9.iVHTT7177Ti9Cx4tvBxtQxC2nZSo65U335bawX4SBh8"}
        })
         .then(products => {
            dispatch({
                type: "GET_ALL_PRODUCTS",
                products
            })
            }).catch(err => {
                console.log("error", err);
            
            })
    }
}