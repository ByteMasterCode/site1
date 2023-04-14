import {combineReducers, createStore} from "redux";
import {HistoryReducer} from "./history/HistoryReducer";
const rootReducer = combineReducers(
    {his:HistoryReducer}
)
export type  RootState = ReturnType<typeof  rootReducer>;
export const store = createStore(rootReducer);
