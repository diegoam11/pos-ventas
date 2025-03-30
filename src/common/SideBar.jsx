import React, { useState } from 'react'

import { MdMenuOpen } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdPointOfSale } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";


const menuItems = [
  {
    icons: <MdAttachMoney size={30} />,
    label: 'Vender',
    redirectTo: '/inicio'
  },
  {
    icons: <MdOutlineDashboard size={30} />,
    label: 'Dashboard',
    redirectTo: '/dashboard'
  },
  {
    icons: <MdPointOfSale size={30} />,
    label: 'Ventas',
    redirectTo: '/mis-ventas'
  },
  {
    icons: <FaProductHunt size={30} />,
    label: 'Productos',
    redirectTo: '/productos'
  }
]

export const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true)

  return (
    <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-600 text-white ${open ? 'w-60' : 'w-16'}`}>

      <div className=' px-3 py-2 h-20 flex justify-between items-center'>
        <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
      </div>

      <ul className='flex-1'>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index} onClick={() => navigate(item.redirectTo)} className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div>{item.icons}</div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16 z-50
                `}>{item.label}</p>
              </li>
            )
          })
        }
      </ul>
      <div className='flex items-center gap-2 px-3 py-2'>
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>diamante</p>
          <span className='text-xs'>diamante@gmail.com</span>
        </div>
      </div>
    </nav>
  )
}
