import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='text-4xl my-5 '>Hello, I'm Raj Bishwakarma.</div>
        <hr className="h-px my-2 bg-gray-200 border-0"></hr>
        <div className='text-2xl my-5'>Welcome to my Portfolio! I’m new in Web Development and I'm looking forward on this career.</div>
        {/* <Link to="/biodata" className="download-button hover:underline">Download My Bio Data</Link> */}
    </div>
  )
}

export default Home
