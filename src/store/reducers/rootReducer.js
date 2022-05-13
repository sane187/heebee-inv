import FranchiseReducer from "./Franchise/FranchiseReducer";
import BranchReducer from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import ProductsReducer from "./Catalog/getProductsRed";
import SidebarReducer from "./sidebarReducer";
import { dashboard_card, dashboard_filters, dashboard_revenue, dashboard_sales_pie } from "./dashboardReducer";
const rootReducer =combineReducers({
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
  toggle:SidebarReducer,
    // Dashboard vars
  dashboard_card:dashboard_card,
  dashboard_filters:dashboard_filters,
  dashboard_revenue:dashboard_revenue,
  dashboard_sales_pie:dashboard_sales_pie

  
})
export default rootReducer;