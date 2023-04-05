export interface FileType {
    id: number
    title: string
    description: string
    sub_menus_id: number
    image: string
    created_at: string
    updated_at: string
    submenu: Submenu
}

export interface Submenu {
    id: number
    name: string
    menus_id: number
    sub_menus_id: any
    type_infos_id: number
    created_at: string
    updated_at: string
    menus: Menus
}

export interface Menus {
    id: number
    name: string
    description: string
    created_at: string
    updated_at: string
}

