import { useState } from 'react'
import logo from "../../assets/Mafer.png";
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Navbar () {
    const { cartQtd } = useCart();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="mt-0 mx-0">
                    <span className="sr-only">Mafer Sports</span>
                    <img className="h-14 w-auto" src={logo} alt="Mafer Sports" />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <FeatherIcon className="h-6 w-6" aria-hidden="true" icon="menu" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <div className="relative">
                    <NavLink to={'/'} className="text-sm font-semibold leading-6 text-gray-900 mx-4">HOME</NavLink>
                    <NavLink href="#" className="text-sm font-semibold leading-6 text-gray-900 mx-4">FUTEBOL</NavLink>
                    <NavLink href="#" className="text-sm font-semibold leading-6 text-gray-900 mx-4">NBA</NavLink>
                </div>
            </div>            
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">              
                <button className='bg-orange-700 text-white font-semibold py-2 px-4 rounded mx-2'>Login / Registre-se</button>
            </div>
            <NavLink to={'/checkout'} className='relative cursor-pointer'>
                <span className='absolute top-[20px] right-[-10px] bg-red-600 rounded-full h-6 w-6 text-center text-white'>{ cartQtd() }</span>
                <FeatherIcon icon="shopping-bag"  className='w-8 h-8'/>
            </NavLink>   
        </nav>        
    )
}