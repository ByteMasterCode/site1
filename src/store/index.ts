import {configureStore} from "@reduxjs/toolkit";
import {menusApi} from "./menus/menus.api";
import {menuReducer} from "./menu/menu.slice";

export  const store = configureStore({
    reducer:{
        [menusApi.reducerPath]: menusApi.reducer,contact:menuReducer
    }
})
export type  TypeRootState = ReturnType<typeof store.getState>