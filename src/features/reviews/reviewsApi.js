import { apiSlice } from '../api/apiSlice'

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({}),
    getReview: builder.query({}),
    addReview: builder.mutation({}),
    updateMutation: builder.mutation({}),
    deleteMutation: builder.mutation({}),
  }),
})

export const {
  useGetReviewsQuery,
  useGetReviewQuery,
  useAddReviewMutation,
  useUpdateMutationMutation,
  useDeleteMutationMutation,
} = reviewsApi
