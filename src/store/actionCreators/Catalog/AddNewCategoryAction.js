import axios from "axios";
import { toast } from "react-toastify";

export const addNewCategory = (cat_name,descr,image,branch_id) => {
    return (dispatch, getState) => {
        axios.post(`${process.env.REACT_APP_API_URL}api/v1/webpos/add_category`, {
            "category_name":cat_name,
            "description":descr,
            "card_img":"https://sequelize.org/v6/image/brand_logo.png",
            "branch_id":branch_id
        })
         .then(res => {
            toast.success(`NEW CATEGORY ADDED SUCCESFULLY`, {
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
