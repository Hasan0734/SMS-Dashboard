import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './../features/api/apiSlice'
import authReducer from './../features/auth/authSlice'
import cartReducer from './../features/cart/cartSlice'
import categoryReducer from './../features/categories/categorySlice'
import addressReducer from './../features/address/addressSlice'
import orderReducer from './../features/orders/ordersSlice'
import productReducer from './../features/products/productsSlice'
import reveiwsReducer from './../features/reviews/reviewsSlice'
import shipperReducer from './../features/shipper/shipperSlice'
import supplierReducer from './../features/supplier/supplierSlice'
import wishlistReducer from './../features/wishlist/wishlistSlice'
import globalSlice from './../features/global/globalSlice'
import userReducer from './../features/user/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    categories: categoryReducer,
    address: addressReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reveiwsReducer,
    shipper: shipperReducer,
    supplier: supplierReducer,
    wishlist: wishlistReducer,
    global: globalSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMIddlewares) =>
    getDefaultMIddlewares().concat(apiSlice.middleware),
})
