import {combineReducers, createStore} from "redux";
import {HistoryReducer} from "./history/HistoryReducer";
import {NewsCategoryReducer} from "./newsCategoryReducer/NewsCategoryReducer";
const rootReducer = combineReducers(
    {his:HistoryReducer,catego:NewsCategoryReducer}
)
export type  RootState = ReturnType<typeof  rootReducer>;

export const store = createStore(rootReducer);
