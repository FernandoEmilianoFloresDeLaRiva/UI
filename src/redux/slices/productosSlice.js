import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/base_URL";

export const productosSlice = createApi({
    reducerPath : "productos",
    baseQuery : fetchBaseQuery(baseUrl),
    endpoints : (builder) => ({
        getProductos : builder.query({
            query : () => "/productos",

        })
    })
});

const {useGetProductosQuery} = productosSlice