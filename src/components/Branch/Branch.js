import React from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewFranchise from "./AddNewFranchise";
import AllBranches from "./AllBranches";
import AddNewBranchMain from "./AddNewBranch/AddNewBranchMain";
class Branch extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<div >Hello main Branch</div>} />
                <Route path="/AddBranch" element={<AddNewBranchMain  sideToggle={this.props.sideToggle}   />} />
                <Route path="/AllBranch" element={<AllBranches  sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddFranchise" element={<AddNewFranchise  sideToggle={this.props.sideToggle}   />} />
               
            </Routes>
        </React.Fragment>)
        
    }
       

    
}
export default Branch;