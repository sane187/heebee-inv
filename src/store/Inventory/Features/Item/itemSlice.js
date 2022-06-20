import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    data:[{name:"Coffe",sku:98145,quantity:"10kg",price:`₹500`},{name:"Olives",sku:98148,quantity:"4kg",price:`₹400`},{name:"Hazelnut",sku:98146,quantity:"6kg",price:`₹500`},{name:"Flour",sku:98147,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98157,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98167,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98177,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98187,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98197,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98947,quantity:"10kg",price:`₹500`},{name:"Flour",sku:98179,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62222,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62223,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62224,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62225,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62226,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62227,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62228,quantity:"10kg",price:`₹500`},{name:"Flour",sku:62292,quantity:"10kg",price:`₹500`}]
}

const itemSlice = createSlice({
    name:'item',
    initialState,
    reducers:{

    },
})

export default itemSlice.reducer;



