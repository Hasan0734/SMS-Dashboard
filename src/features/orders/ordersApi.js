import { apiSlice } from '../api/apiSlice'

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({}),
    getOrder: builder.query({}),
    addCategory: builder.mutation({}),
    updateCategory: builder.mutation({}),
    deleteCategory: builder.mutation({}),
  }),
})

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = orderApi
