export interface HierarchyType {
    id: number
    name: string
    description: string
    image: string
    level: number
    sub_menus_id: string
    menu: Menu
}

export interface Menu {
    id: number
    name: string
    menus_id: number
    sub_menus_id: any
    type_infos_id: number
}