import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Menu, TcMenu} from "../../model/Menu";
import {MenuType} from "../../model/MenuType";

const initialState: TcMenu = {
    id: 1,
    name: 'Main',
    description: 'string',
    type_infos_id: 'string',
    created_at: 'string',
    updated_at: 'string',
    type: {
        id: 1,
        name: 'string',
        created_at: 'string',
        updated_at: 'string',
    },
    sub_menu: []
}

export const menuslice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        updateMenu: (state,action:PayloadAction<Menu>)=>{
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.description = action.payload.description;
            state.type_infos_id = action.payload.type_infos_id;
            state.created_at = action.payload.created_at;
            state.updated_at = action.payload.updated_at;
            state.type = action.payload.type;
            state.sub_menu = action.payload.sub_menu;
        }
    }

})

export const menuReducer = menuslice.reducer;
export const menuActions = menuslice.actions;
