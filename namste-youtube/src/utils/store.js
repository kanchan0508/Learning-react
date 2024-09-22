import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
        reducer:{
       app: AppSlice,
       search: searchSlice
        }
})

export default store;