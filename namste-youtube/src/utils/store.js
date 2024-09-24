import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
        reducer:{
       app: AppSlice,
       search: searchSlice,
       chat: ChatSlice
        }
})

export default store;