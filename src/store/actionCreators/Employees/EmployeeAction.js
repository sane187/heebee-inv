import axios from "axios";
import { toast } from "react-toastify";

export const fetchSingleEmployee= (emp_id) => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/employee/get_employee?employee=${emp_id}`)
            .then(employee => {
                dispatch({
                    type: "GET_SINGLE_EMPLOYEE",
                    employee
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}
export const fetchEmployees = (page,franchise_id,branch_id,search) => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/employee/get_all_employees/${page}?franchise=${franchise_id}&branch=${branch_id}&search=${search}`)
            .then(employees => {
                dispatch({
                    type: "GET_EMPLOYEES",
                    employees
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}
export const EmployeeSalesAnalytics = (emp_id,filter,year) => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/employee//employee_sales_analytics?employee=${emp_id}&filter_by=${filter}&year=${year}`)
            .then( employee_sales_analytics => {
                dispatch({
                    type: "EMPLOYEE_SALES_ANALYTICS",
                    employee_sales_analytics
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}
export const addEmployees = (full_name,mobile_no,email,password,dob,address,branch_name,branch_id,employee_role,employee_role_id,gender) => {
    return (dispatch, getState) => {
        axios.post(`${process.env.REACT_APP_API_URL}api/v1/admin/employee/get_all_employees/1?franchise=b3965289-93e6-4f30-989c-eabb37d0b69a&branch=3e2f18a3-7143-4ada-8e97-b4745c63f06a&search=rahul`,{
                "full_name":full_name,
                "mobile_no":mobile_no,
                "email":email,
                "password":password,
                "profile_pic":"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png",
                "date_of_birth":dob,
                "address":address,
                "branch":branch_name,
                "branch_id":branch_id,
                "employee_role":employee_role,
                "employee_role_id":employee_role_id,
                "gender":gender
            }
        )
            .then(res => {
                toast.error(`successFully submitted`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined, theme: "colored"
                })
            }).catch(err => {
                console.log("error", err);

            })
    }
}

export const getEmployeePagination=()=>{
    return(dispatch,getSate)=>{
        dispatch({
            type:"GET_EMPLOYEE_PAGE",

        })
    }
}
export const setEmployeePagination=(page)=>{
    return(dispatch,getSate)=>{
        dispatch({
            type:"SET_EMPLOYEE_PAGE",
            page
        })
    }
}
export const EmployeeOrdersTaken = (page,emp_id,search) => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/employee/get_employee_orders/${page}?employee=${emp_id}&search=${search}`)
            .then( employee_orders_taken => {
                dispatch({
                    type: "EMPLOYEE_ORDERS_TAKEN",
                    employee_orders_taken
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}
export const getOrderPagination=()=>{
    return(dispatch,getSate)=>{
        dispatch({
            type:"GET_ORDER_PAGE",

        })
    }
}
export const setOrderPagination=(page)=>{
    return(dispatch,getSate)=>{
        dispatch({
            type:"SET_ORDER_PAGE",
            page
        })
    }
}
export const getEmployeeRoles = () => {
    return (dispatch, getState) => {
        axios.get(`${process.env.REACT_APP_API_URL}api/v1/admin/employee/get_employee_roles`)
            .then( roles => {
                dispatch({
                    type: "GET_ROLES",
                    roles
                })
            
            }).catch(err => {
                console.log("error", err);

            })
    }
}