import React, { useEffect, useState } from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewProduct from "./AddNewFoodItem/AddNewProduct";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import AddCategoryToBranches from "./AddNewCategory/AddCategoryToBranches";
import AddNewCatMain from "./AddNewCategory/AddNewCatMain";
import AddNewFoodMain from "./AddNewFoodItem/AddNewFoodMain";
import AddAddons from "./AddAddons/AddAddons";
import AllCategory from "./AllCategory/AllCategory";
import { useDispatch, useSelector } from "react-redux";
import { get_category_branches } from "../../store/actionCreators/Catalog/Catalog";
import IndividualCat from "./AllCategory/IndividualCat";
const Catalog=(props)=>{
  const [currentCategory,setCategory]=useState({})
  const Branches=useSelector(state=>state.getBranchInCat)
  const dispatch=useDispatch()
//   useEffect(()=>{
//       if(currentCategory.category_list_id && currentBranch){
//            dispatch(get_category_branches(currentCategory.category_list_id,currentBranch))}

//   },[Branches])
  
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<AllCategory sideToggle={props.sideToggle} setCategory={setCategory}  />} />
                <Route path="/AddProduct" element={<AddNewFoodMain sideToggle={props.sideToggle}   />} />
                <Route path="/AddCategory" element={<AddNewCatMain  sideToggle={props.sideToggle}   />} />
                <Route path="/AddAddons" element={<AddAddons sideToggle={props.sideToggle}   />} />
                <Route path="/Individual_category" element={<IndividualCat sideToggle={props.sideToggle}  currentCategory={currentCategory} />} />
            </Routes>
        </React.Fragment>)
       
}
export default Catalog;