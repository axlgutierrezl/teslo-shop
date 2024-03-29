'use client';

import React from 'react'
import { IoCloseOutline, IoSearchOutline, IoPersonOutline, IoTicketOutline, IoLogInOutline, IoLogOutOutline, IoShirtOutline, IoPeopleOutline } from 'react-icons/io5'
import Link from 'next/link';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>

      {/* Background black */}

      {
        isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          ></div>
        )
      }


      {/* Blur */}
      {
        isSideMenuOpen && (
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={() => closeMenu()}
          ></div>
        )
      }

      {/* SideMenu */}
      <nav
        // todo : efecto deslide 
        //className="fixed top-0 right-0 p-5 bg-white z-20 w-[500px] h-screen shadow-2xl transform transition-all duration-300">
        className={
          clsx(
            "fixed top-0 right-0 p-5 bg-white z-20 w-[500px] h-screen shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }>

        <IoCloseOutline
          size={50}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-20">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />

        </div>

        {/* Menu */}

        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>


        <Link href="/orders"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>


        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10"></div>


        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>

        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link href="/"
          className="flex items-center mt-10 p-2 rounded hover:bg-gray-100 transition-all">
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>

      </nav>




    </div>
  )
}
