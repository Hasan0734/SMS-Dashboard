import { apiSlice } from '../api/apiSlice'

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({}),
    getCart: builder.query({}),
    addCart: builder.mutation({}),
    updateCart: builder.mutation({}),
    deleteCart: builder.mutation({}),
  }),
})

export const {
  useGetCartsQuery,
  useGetCartQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi
