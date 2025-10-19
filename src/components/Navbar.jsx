import { useState } from "react";
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [mobileIconClick, setMobileIconClick] = useState(false);
    const [menuColor, setMenuColor] = useState('');

    const mobileMenuClick = () => {
        setMobileIconClick(!mobileIconClick)
    }

    return (
        <>
            <nav className="py-3 md:py-4 border-b-1 border-gray-300">
                <section className="max-w-screen-2xl mx-auto flex items-center justify-between px-5">
                    <button className="flex items-center gap-1 cursor-pointer">
                        <img className="w-10 md:w-12" src={logo} alt="" />
                        <h1 className="text-xl font-bold text-[#9F62F2]">Fusion.Com</h1>
                    </button>
                    <div className="space-x-8 lg:space-x-10 text-lg font-medium hidden md:flex">
                        <a href="" onClick={()=>{setMenuColor("home")}} className={`${menuColor === 'home'?"text-[#9F62F2]":null}`}>Home</a>
                        <a href="" onClick={()=>{setMenuColor("apps")}} className={`${menuColor === 'apps'?"text-[#9F62F2]":null}`}>Apps</a>
                        <a href="">Installation</a>
                    </div>
                    <div className="hidden md:flex">
                        <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-md text-white cursor-pointer font-medium">Contribute</button>
                    </div>
                    <button onClick={mobileMenuClick} className="md:hidden text-2xl text-[#9F62F2]">
                        <FaBars className={`${mobileIconClick ? "hidden" : "block"} `} />
                        <RxCross1 className={`${mobileIconClick ? "block " : "hidden"}`} />
                    </button>
                </section>
                <section className={`${mobileIconClick ? "block" : "hidden"}`}>
                    <div className="flex md:hidden flex-col px-5 gap-2 pt-4">
                        <a href="" className="bg-[#F5F5F5] px-2 py-1 rounded-md">Home</a>
                        <a href="" className="bg-[#F5F5F5] px-2 py-1 rounded-md">Apps</a>
                        <a href="" className="bg-[#F5F5F5] px-2 py-1 rounded-md">Installation</a>
                        <a href="" className="bg-[#9F62F2] text-center text-white px-2 py-1 rounded-md">Contribute</a>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar;