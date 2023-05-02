import { apiSlice } from '../api/apiSlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCagegories: builder.query({}),
    getCategory: builder.query({}),
    addCategory: builder.mutation({}),
    updateCategory: builder.mutation({}),
    deleteCategory: builder.mutation({}),
  }),
})

export const {
  useGetCagegoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi
