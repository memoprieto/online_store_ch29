
import React from "react"

// Context describe the data and fuction that willl existe in the store
// this contains only the definition, NO IMPLEMENTATION here

const StoreContext=React.createContext({
    cart: [],
    user: {},

    addProduct: () => {},
    removeProduct: () => {},
});

export default StoreContext;