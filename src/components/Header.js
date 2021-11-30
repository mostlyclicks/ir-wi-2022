import React from 'react'
import logo from '../images/logo6.png';
import bgImg from '../images/s_education3.jpg'

const Header = () => {
  return (
    <header className="relative bg-no-repeat h-screen w-screen " style={{backgroundImage: `url("${bgImg}")`, backgroundSize: 'cover' }}>
    <div className="flex flex-col justify-center relative w-full h-full z-20 justify-self-center ">
      <img src={logo} className="self-center w-1/6 sm:w-1/8 md:w-1/12 mb-8" alt="logo" />
      <h1 className="text-2xl sm:text-4xl text-white">Integrated Restorations, LLC</h1>
    </div>

    <div className="bg-green-900 opacity-40 w-full h-full absolute top-0 left-0 z-10">hello</div>
      
        
      </header>
  )
}

export default Header
