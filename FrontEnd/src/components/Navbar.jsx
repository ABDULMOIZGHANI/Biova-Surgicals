import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx"

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <nav className="py-3 bg-white shadow-md">
            <div className="flex items-center justify-between w-[95%] md:w-[85%] m-auto">
                <div className="cursor-pointer">
                    <Link to="/">
                        <img src="/Navbar Images/BIOVA SURGICAL LOGO.png" alt="Biova Surgical Logo" className="h-[70px]" />
                    </Link>
                </div>

                <div className="flex items-center justify-between gap-[30px]">
                    {/* Hamburger Menu Icon (visible on small screens) */}
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        {!isMenuOpen ? <GiHamburgerMenu size={30} className="text-[#008581]" /> : <RxCross2
                            size={30} className="text-[#008581] font-light" />}
                    </div>

                    {/* Nav Links (hidden on small screens) */}
                    <ul className="hidden md:flex space-x-6 text-[#008581] font-bold text-[18px] lato">
                        <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
                        <li><Link to="/products" className="hover:text-teal-400">Products</Link></li>
                        <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
                    </ul>

                    {/* Search Bar (hidden on small screens) */}
                    <div className="hidden md:flex items-center border border-[#02BBB6] border-[2px] h-[41px] rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 outline-none w-40"
                        />
                        <button className="bg-teal-500 text-white px-3 cursor-pointer py-3">
                            <IoSearch size={25} />
                        </button>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="relative">
                            <AiOutlineShoppingCart size={30} className="text-[#008581]" />
                            <span className="absolute -top-[11px] -right-[11px] bg-[#02BBB6] text-white text-xs px-2 py-1 rounded-full">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu (visible on small screens when hamburger is clicked) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <ul className="flex flex-col space-y-4 text-[#008581] font-bold text-[18px] lato p-4">
                        <li><Link to="/" className="hover:text-teal-400" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/products" className="hover:text-teal-400" onClick={toggleMenu}>Products</Link></li>
                        <li><Link to="/blog" className="hover:text-teal-400" onClick={toggleMenu}>Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-teal-400" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>

        <div className="flex md:hidden justify-between w-[95%] m-auto mt-[20px] items-center border border-[#008581] rounded-md overflow-hidden">
            <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 outline-none w-40"
            />
            <button className="bg-teal-500 text-white px-4 cursor-pointer py-3">
                <IoSearch />
            </button>
        </div>
    </>
    );
}
