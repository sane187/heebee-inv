import FranchiseReducer from "./Franchise/FranchiseReducer";
import BranchReducer from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import  {ProductsReducer, AddonsReducer, CategoryReducer } from "./Catalog/getProductsRed";
import SidebarReducer from "./sidebarReducer";
import { dashboard_card, dashboard_filters, dashboard_revenue, dashboard_sales_pie } from "./dashboardReducer";
import { CustomerAnalyticsGraphReducer, CustomerAnalyticsPieReducer, CustomerAvgPurchaseReducer, CustomerDashboardReducer, CustomerOrderHistoryReducer, CustomerPaginationReducer, fetchCustomersReducer, MostOrderPaginationReducer, OrderAnalyticsGraphReducer } from "./Customer/customerReducer";
import {EmployeeOrdersTakenReducer, EmployeePaginationReducer, EmployeeSalesAnalyticsReducer, fetchEmployeesReducer, fetchSingleEmployeeReducer, OrdersPaginationReducer} from "./Employee/EmployeeReducer"
import EmployeePagination from "../../components/Employees/EmployeePagination";
const rootReducer =combineReducers({
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
  addons:AddonsReducer,
  categories:CategoryReducer,
  toggle:SidebarReducer,
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