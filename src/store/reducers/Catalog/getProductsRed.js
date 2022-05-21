export const ProductsReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return action.products;
        default:
            return state;
    }
}

export const CategoryReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_ALL_CATEGORIES":
            return action.categories;
        default:
            return state;
    }
}
export const get_category_branchesReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_CATEGORY_BRANCHES":
            return action.data;
        case "SET_CATEGORY_BRANCHES":
            return ""
        default:
            return state;
    }
}

export const get_product_branchReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_BRANCH_PRODUCT":
            return action.data;
        case "SET_BRANCH_PRODUCT":
            return ""
        default:
            return state;
    }
}

export const AddonsReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_ALL_ADDONS":
            return action.addons;
        default:
            return state;
    }
}
