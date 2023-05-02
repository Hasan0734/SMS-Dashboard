import { apiSlice } from '../api/apiSlice'

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({}),
    getProduct: builder.query({}),
    addProduct: builder.mutation({}),
    updateCategory: builder.mutation({}),
    deleteCategory: builder.mutation({}),
  }),
})

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productsApi
