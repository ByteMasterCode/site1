export interface Menus {
    id: number
    name: string
    description: string
    created_at: string
    updated_at: string
    sub_menu: SubMenu[]
}

export interface SubMenu {
    id: number
    name: string
    menus_id: number
    sub_menus_id: any
    type_infos_id: number
    created_at: string
    updated_at: string
    type: Type
}

export interface Type {
    id: number
    name: string
    created_at: string
    updated_at: string
}