import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../index";


export const useTypeSelector : TypedUseSelectorHook<RootState> = useSelector;