export interface CategoryOneNews {
    id: number
    name: string
    news: News[]
}

 interface News {
    id: number
    title: string
    description: string
    image: string
}
