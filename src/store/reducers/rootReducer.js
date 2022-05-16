import FranchiseReducer from "./Franchise/FranchiseReducer";
import BranchReducer from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import ProductsReducer from "./Catalog/getProductsRed";
import SidebarReducer from "./sidebarReducer";
import { dashboard_card, dashboard_filters, dashboard_revenue, dashboard_sales_pie } from "./dashboardReducer";
import { CustomerAnalyticsGraph, CustomerDashboard, fetchCustomers } from "../actionCreators/Customers/CustomerAction";
import { CustomerAnalyticsGraphReducer, CustomerAnalyticsPieReducer, CustomerAvgPurchaseReducer, CustomerDashboardReducer, CustomerOrderHistoryReducer, CustomerPaginationReducer, fetchCustomersReducer, MostOrderPaginationReducer, OrderAnalyticsGraphReducer } from "./Customer/customerReducer";
const rootReducer =combineReducers({
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
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

  
})
export default rootReducer;