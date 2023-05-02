import { apiSlice } from '../api/apiSlice'

export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishlists: builder.query({}),
    getWishlist: builder.query({}),
    addWishlist: builder.mutation({}),
    updateWishlist: builder.mutation({}),
    deleteWishlist: builder.mutation({}),
  }),
})

export const {
  useGetWishlistsQuery,
  useGetWishlistQuery,
  useAddWishlistMutation,
  useUpdateWishlistMutation,
  useDeleteWishlistMutation,
} = wishlistApi
