import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../src/components/Header/index"
import Footer from "../src/components/Footer/index"
import Container from 'react-bootstrap/esm/Container'


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App