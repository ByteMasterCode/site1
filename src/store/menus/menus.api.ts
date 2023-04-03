import  {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Menu} from "../../model/Menu";


export const menusApi = createApi({
    reducerPath: 'menus/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Access-Control-Allow-Origin', '*')
            return headers
        }
    }),
    endpoints: build => ({
        getMenus:build.query<Menu[],string>({
            query:()=>'api/menu/?lang=uz'
        })
    })
})

export const {useGetMenusQuery} = menusApi

