import React from 'react'

const Form = () => {
  return (
    <section className="pt-8 pb-12 bg-gray-100">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Contact Us</h2>
    <form name="contact" className="text-gray-600 flex flex-col w-full px-12 sm:w-8/12 sm:mx-auto" netlify>
      <p className="flex flex-col mb-4">
        <label className="self-start">Name</label>
        <input type="text" name="name" className="rounded-md bg-gray-25 border-gray-300" />
      </p>
      <p className="flex flex-col mb-4">
        <label className="self-start">Email</label>
        <input type="email" name="email" className="rounded-md bg-gray-25 border-gray-300" />
      </p>
      <p className="flex flex-col mb-6">
        <label className="self-start">Question or Comment:</label>
        <textarea name="message" className="h-36 rounded-md bg-gray-25 border-gray-300"></textarea>
      </p>
      <p >
        <button type="submit" className="bg-gray-400 opacity-60 w-full p-4 rounded-md hover:opacity-75 hover:bg-green-600 text-white border-gray-300">Send</button>
      </p>
    </form>
      
    </section>
  )
}

export default Form
