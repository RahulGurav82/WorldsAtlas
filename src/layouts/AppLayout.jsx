import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'

const AppLayout = () => {
  const navigate =  useNavigation();

  if( navigate.state === "loading") return <h3>Loading..!</h3>

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout