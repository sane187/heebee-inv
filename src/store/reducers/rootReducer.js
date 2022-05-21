import FranchiseReducer from "./Franchise/FranchiseReducer";
import  {BranchReducer, SingleBranchReducer } from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import  {ProductsReducer, AddonsReducer, CategoryReducer } from "./Catalog/getProductsRed";
import SidebarReducer from "./sidebarReducer";
import { dashboard_card, dashboard_filters, dashboard_revenue, dashboard_sales_pie } from "./dashboardReducer";
import { CustomerAnalyticsGraphReducer, CustomerAnalyticsPieReducer, CustomerAvgPurchaseReducer, CustomerDashboardReducer, CustomerOrderHistoryReducer, CustomerPaginationReducer, fetchCustomersReducer, MostOrderPaginationReducer, OrderAnalyticsGraphReducer } from "./Customer/customerReducer";
import {EmployeeOrdersTakenReducer, EmployeePaginationReducer, EmployeeSalesAnalyticsReducer, fetchEmployeesReducer, fetchSingleEmployeeReducer, OrdersPaginationReducer, RolesReducer} from "./Employee/EmployeeReducer"
import EmployeePagination from "../../components/Employees/EmployeePagination";
import authReducer from "./loginReducer";
import { get_admin_rolesReducer } from "./User/UserReducer";
const rootReducer =combineReducers({
  login:authReducer,
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
  addons:AddonsReducer,
  categories:CategoryReducer,
  toggle:SidebarReducer,
  role:RolesReducer,
  admin_role:get_admin_rolesReducer,
  single_branch:SingleBranchReducer,
    // Dashboard vars
  dashboard_card:dashboard_card,
  dashboard_filters:dashboard_filters,
  dashboard_revenue:dashboard_revenue,
  dashboard_sales_pie:dashboard_sales_pie,
  //  Customer vars
  customers:fetchCustomersReducer,
  customer_dashboard:CustomerDashboardReducer,
  customer_analytics_pie:CustomerAnalyticsPieReducer,
  customer_analytics_graph:CustomerAnalyticsGraphReducer,
  customer_order_history:CustomerOrderHistoryReducer,
  order_analytics_graph:OrderAnalyticsGraphReducer,
  customer_avg_purchase:CustomerAvgPurchaseReducer,
  customer_page:CustomerPaginationReducer,
  mostOrderPage:MostOrderPaginationReducer,
//  employees
 employees:fetchEmployeesReducer,
 empPage:EmployeePaginationReducer,
 employee:fetchSingleEmployeeReducer,
  employee_sales_analytics:EmployeeSalesAnalyticsReducer,
  employee_orders_taken:EmployeeOrdersTakenReducer,
  emp_orders_page:OrdersPaginationReducer
})
export default rootReducer;