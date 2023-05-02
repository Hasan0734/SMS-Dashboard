import { apiSlice } from '../api/apiSlice'

export const supplierApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuppliers: builder.query({}),
    getSupplier: builder.query({}),
    addSupplier: builder.mutation({}),
    updateSupplier: builder.mutation({}),
    deleteSupplier: builder.mutation({}),
  }),
})

export const {
  useGetSuppliersQuery,
  useGetSupplierQuery,
  useAddSupplierMutation,
  useUpdateSupplierMutation,
  useDeleteSupplierMutation,
} = supplierApi
