import { Navigate, Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
    return (
      <div className="bg-bws-90 min-h-screen h-fit flex flex-col">
        <div className="header " id='top'>
            <div className="bg-bws-10 text-bws-90 text-4xl text-center font-bold p-5" >My Portfolio</div>
            <nav className="bg-white text-center font-medium flex flex-col justify-around px-10 transition-all shadow-lg sm:flex-row">
                <Link to="/home" className=" flex-1 py-2 hover:bg-bws-90 duration-200 ">Home</Link>
                <Link to="/aboutme" className=" flex-1 py-2 hover:bg-bws-90 duration-200 ">About Me</Link>
                <Link to="/biodata" className=" flex-1 py-2 hover:bg-bws-90 duration-200 ">Biodata</Link>
                {/* <Link to="/contact" className=" flex-1 py-2 hover:bg-bws-90 ">Contact</Link> */}
            </nav>
        </div>
        <div className="body relative flex flex-col flex-1">
            <div className="flex flex-1 flex-col items-center justify-center w-full my-5 mx-auto ">
                <div className="bg-white text-black w-10/12 h-full p-10 rounded-md shadow-xl">
                    <Outlet></Outlet>
                </div>
                
            </div>
        </div>
        <div className="fotter bg-bws-15 text-center text-white p-5 ">
            <div className="">
                <div className="">My Contact Info</div>
                <div className="flex justify-around">
                <div className="flex flex-col  items-start">
                    <div className="">Email: <a href="mailto:rajbishwakarma@gmail.com">rajbishwakarma@gmail.com</a></div>
                    <div className="">phone no.: +977 9746644936</div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="">Connect me on:</div>
                    <div className="">Facebook | instagram</div>
                </div></div>
            </div>
            <div className="mt-2">All &copy; copyright reserved 2024.</div>
        </div>
        {/* <a href="#top" className="">
            <button className="bg-bws-30 h-10 w-10 p-1 rounded-full fixed bottom-10 right-10">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#ffffff"></path> </g></svg>
            </button>
        </a> */}
      </div>
    )
  }
