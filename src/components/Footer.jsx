import logo from "../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className='bg-[#001931] text-white'>
                <section className="max-w-screen-2xl mx-auto px-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between py-6">
                        <button className="flex items-center gap-1 cursor-pointer">
                            <img className="w-10" src={logo} alt="" />
                            <h1 className="text-xl font-bold">Fusion.Com</h1>
                        </button>
                        <div className="flex flex-col mt-4 sm:mt-0 sm:flex-row items-center gap-1 sm:gap-3">
                            <p className="text-xl">Social Links</p>
                            <div className="flex items-center gap-3">
                                <FaFacebookSquare className="text-2xl cursor-pointer" />
                                <FaSquareInstagram className="text-2xl cursor-pointer" />
                                <FaLinkedin className="text-2xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <hr className="text-gray-700" />
                    <p className="py-8 text-center">Copyright © 2025 - All right reserved</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;