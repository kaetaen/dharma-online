import om from '../assets/om.png'
import {Link } from "react-router-dom";
import { useRef } from 'react'

function NavBar () {
    const navMobileRef = useRef()

    const toggleNavMobile = () => {
      navMobileRef.current.classList.toggle("showElement")
    }

    return (
        <nav className="bg-emerald-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="flex items-center">
            <img src={om} className="h-6 mr-3 sm:h-9" alt="Dharma logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dharma Online</span>
        </Link>
        <div className="flex md:order-2">
            <Link to={"/sugestoes"} className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Sugira</Link>
            <button onClick={toggleNavMobile} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div  ref={navMobileRef} className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="bg-emerald-700 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
            <li>
              <Link to={"/theravada"} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-red-600 md:hover:bg-transparent md:hover:text-red-300 md:p-0 ">Theravada</Link>
            </li>
            <li>
              <Link to={"/mahayana"} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-red-600 md:hover:bg-transparent md:hover:text-red-300 md:p-0">Mahayana</Link>
            </li>
            <li>
              <Link to={"/vajrayana"} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-red-600 md:hover:bg-transparent md:hover:text-red-300 md:p-0 ">Vajrayana</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default NavBar