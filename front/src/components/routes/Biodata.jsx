import React from 'react'

const Biodata = () => {
  return (
    <div className='flex flex-col'>
      <a href="" download={"/biodata.png"} className="flex-1 flex justify-end mr-5">
        <button className="bg-bws-10 text-white py-2 px-4 rounded-md hover:bg-bws-25 active:bg-bws-125">Download</button>
      </a>
      <img src="/biodata.png" alt="" className="" />
    </div>
  )
}

export default Biodata
