import React from 'react'
import Main from './pages/Main.page'
import { BrowserRouter } from 'react-router-dom'
import { 
  Head,
  Navbar 
} from './components/index';

const ApplicationContainer = () => {

  return (    
    <BrowserRouter>
      <Head />
      <div className='relative z-0 w-full bg-primary'>
        <div className='bg-hero-pattenrn bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* Hero */}
        </div>
        <div className='relative z-0'>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default ApplicationContainer
