import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Theme from './components/layout/Theme'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import useAuthCheck from './hooks/useAuthCheck'
import Loader from './components/ui/Loader'
import PrivateRoute from './AuthRoutes/PrivateRoute'
import PublicRoute from './AuthRoutes/PublicRoute'

const App = () => {
  const authCheck = useAuthCheck()
  return !authCheck ? (
    <Loader />
  ) : (
    <Theme>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Theme>
  )
}

export default App
