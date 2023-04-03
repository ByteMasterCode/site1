import {MenuType} from "./MenuType";

export interface Menu {
    id: number
    name: string
    description: string
    type_infos_id: string
    created_at: string
    updated_at: string
    type: MenuType
    sub_menu: any[]
}

export type  TcMenu = Menu & MenuType;