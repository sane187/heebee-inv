export const ProductsReducer = (state="", action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return action.products;          
        default:
            return state;
    }
}

export const CategoryReducer = (state="", action) => {
    switch (action.type) {
        case "GET_ALL_CATEGORIES":
            return action.categories;          
        default:
            return state;
    }
}
export const AddonsReducer = (state="", action) => {
    switch (action.type) {
        case "GET_ALL_ADDONS":
            return action.addons;          
        default:
            return state;
    }
}
