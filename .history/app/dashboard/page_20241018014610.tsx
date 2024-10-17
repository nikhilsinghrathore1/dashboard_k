import React from 'react'
import SideNavBar from '../component/SideNavBar'
import { FaSearch } from "react-icons/fa";




const page = () => {
  return (
    <div className='w-full h-screen flex bg-[#fafbff]'>

               {/* this is the side navbar  */}

              <SideNavBar/>

              {/* this is the right div  */}

              <div className='w-[82%]  h-full '>
                              <div className='w-full px-5 py-1 flex justify-between bg-[red] h-[10%] items-center'>
                                             <div className='relative w-[20%]'>
                                                            <input className='outline-none w-full py-1 rounded-[7px]  px-3 bg-[#f3f7fa]' type="text" placeholder='Search Anything...' />
                                                            <div className='absolute text-[1.2rem] top-[5px] right-4 opacity-50 font-bold '>
                                                            <FaSearch/>
                                                            </div>
                                             </div>
                              </div>
              </div>
    </div>
  )
}

export default page