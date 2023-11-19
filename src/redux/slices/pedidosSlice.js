import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/base_URL";

export const pedidosSlice = createApi({
    reducerPath : "pedidos",
    baseQuery : fetchBaseQuery(baseUrl),
    endpoints : (builder) => ({
        
    })
});
