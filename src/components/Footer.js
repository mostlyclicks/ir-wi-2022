import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <section className="flex justify-end container mx-auto py-8 text-gray-50">
      <div className="text-left mr-8">
        <p>
          Integrated Restorations, LLC<br/>
          228 S Park St<br/>
          Belleville, WI 53508<br/><br/>

          (608) 424-6997 (office)<br/>
          (608) 547-1713 (mobile)
        </p>
      
      </div>
      <div></div>
 
        <a
          className="App-link"
          href="https://www.facebook.com/Integratedrestorations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check us out on Facebook!
        </a>
      </section>
    </footer>
  )
}

export default Footer