import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }) => {
  const { sidebarExpanded } = useSelector((state) => state.global)

  return (
    <div
      className={`min-h-100vh flex grow bg-slate-50 dark:bg-navy-900 ${
        sidebarExpanded && 'is-sidebar-open'
      }`}
    >
      <div className='sidebar print:hidden '>
        <Sidebar />
      </div>

      <nav className='header print:hidden'>
        <Header />
      </nav>

      {/* Main Content Wrapper */}
      <main className='main-content w-full px-[var(--margin-x)] pb-8'>
        {children}
      </main>

      {/* Footer */}
    </div>
  )
}

export default Layout
