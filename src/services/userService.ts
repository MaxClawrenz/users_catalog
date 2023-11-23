//import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../interfaces/IUser'
import { FilterState } from '../interfaces/FilterState'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl:'/custom_web_template.html'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], FilterState>({
            query: (filter) => ({
                url: '?object_code=users_catalog_back',
                method: 'POST',
                body: filter
            })
        })
    })
})