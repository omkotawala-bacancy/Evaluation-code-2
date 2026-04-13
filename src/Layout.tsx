import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComponent from './component/NavComponent'

function Layout() {
  return (
    <>
        <NavComponent />
        <Outlet />
    </>
  )
}

export default Layout