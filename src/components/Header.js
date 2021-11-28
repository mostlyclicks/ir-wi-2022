import React from 'react'
import logo from '../images/logo6.png';
import bgImg from '../images/s_education3.jpg'

const Header = () => {
  return (
    <header className="App-header" style={{backgroundImage: `url("${bgImg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div className="bg-gray-900 h-100vh w-100vw z-100 absolute border-2">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Integrated Restorations, LLC</h1>
    </div>
      
        
      </header>
  )
}

export default Header
