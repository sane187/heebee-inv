import React, { useState } from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewFranchise from "./AddNewFranchise";
import AllBranches from "./AllBranches";
import AddNewBranchMain from "./AddNewBranch/AddNewBranchMain";
import IndividFranchise from "./IndividualFranchise/IndividFranchise";
const Branch=(props)=>{
    const [franchise, setCurrFranchise] = useState({})
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<div >Hello main Branch</div>} />
                <Route path="/AddBranch" element={<AddNewBranchMain  sideToggle={props.sideToggle}   />} />
                <Route path="/AllBranch" element={<AllBranches setCurrFranchise={setCurrFranchise} sideToggle={props.sideToggle}   />} />
                <Route path="/AddFranchise" element={<AddNewFranchise  sideToggle={props.sideToggle}   />} />
                <Route path="/Franchise"  element={<IndividFranchise franchise={franchise}  sideToggle={props.sideToggle}   />} />
            </Routes>
        </React.Fragment>)
        

       

    
}
export default Branch;