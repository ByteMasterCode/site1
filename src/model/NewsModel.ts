export interface NewsModel {
    id: number
    title: string
    description: string
    image: string
    categories: Categories
}

export interface Categories {
    id: number
    name: string
}
