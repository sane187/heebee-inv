import axios from "axios"
import { toast } from "react-toastify"

export const addAdmin = (OB) => {

    axios.post(`${process.env.REACT_APP_API_URL}api/v1/admin/admin_signup`,{
            "username":OB.username,
            "phone":OB.mobile_no,
            "email":OB.email,
            "password":OB.password,
            "date_of_birth":OB.date_of_birth,
            "branch_id":OB.branch_id,
            "franchise_id":OB.franchise_id,
            "admin_role_id":OB.employee_role_id,
            "gender":OB.gender
        }
    )
        .then(res => {
            toast.success(`successFully Added Admin`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined, theme: "colored"
            })
         setTimeout(()=>{window.location.reload(false)},4000)
        }).catch(err => {
            console.log("error", err);

        })

}
export const getAdminRoles = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/get_admin_roles`)
            .then( admin_role => {
                dispatch({
                    type: "GET_ADMIN_ROLES",
                    admin_role
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}