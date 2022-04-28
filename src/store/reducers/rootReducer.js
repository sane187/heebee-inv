import FranchiseReducer from "./Franchise/FranchiseReducer";
import BranchReducer from "./Branch/BranchReducer";
import { combineReducers } from "redux";
import ProductsReducer from "./Catalog/getProductsRed";
import SidebarReducer from "./sidebarReducer";
const rootReducer =combineReducers({
  franchise:FranchiseReducer,
  branch:BranchReducer,
  products:ProductsReducer,
  toggle:SidebarReducer
})
export default rootReducer;