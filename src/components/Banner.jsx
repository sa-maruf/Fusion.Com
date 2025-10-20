import google from "../assets/google-play.png"
import app from "../assets/app-store.png"
import hero from "../assets/hero.png"

const Banner = () => {
    return (
        <>
            <section className='min-h-screen bg-[#F5F5F5]'>
                <div className="max-w-screen-2xl mx-auto px-5 pt-10 md:pt-16">
                    <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold text-[#182F44]">We Build <br /> <span className="text-[#8351E9]">Productive</span> Apps</h1>
                    <p className="text-[#627382] mt-5 text-base sm:text-lg text-center w-11/12 sm:w-10/12 md:w-8/12  lg:w-7/12 mx-auto">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
                        <a href="https://play.google.com/store/games?hl=en" target="_blank" className="border-2 rounded-md border-[#D2D2D2] flex items-center gap-2 px-4 py-2 cursor-pointer">
                            <img className="w-4 sm:w-6" src={google} alt="" />
                            <p className="font-semibold text-[#182F44] text-xs sm:text-base">Google Play</p>
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" className="border-2 rounded-md border-[#D2D2D2] flex items-center gap-2 px-4 py-2 cursor-pointer">
                            <img className="w-4 sm:w-6" src={app} alt="" />
                            <p className="font-semibold text-[#182F44] text-xs sm:text-base">App Store</p>
                        </a>
                    </div>
                    <div className="flex justify-center mt-8">
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#632EE3] via-[#9F62F2] to-[#632EE3] mb-10 md:mb-16">
                    <div className="max-w-screen-2xl mx-auto px-5 py-16 text-white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold">Trusted by Millions, Built for You</h1>
                        <div className="flex flex-col sm:flex-row gap-10 items-center justify-between mt-10">
                            <div className="text-center space-y-3 md:space-y-4">
                                <p className="text-base">Total Downloads</p>
                                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">29.6M</h1>
                                <p className="text-base">21% more than last month</p>
                            </div>
                            <div className="text-center space-y-3 md:space-y-4">
                                <p className="text-base">Total Reviews</p>
                                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">906K</h1>
                                <p className="text-base">46% more than last month</p>
                            </div>
                            <div className="text-center space-y-3 md:space-y-4">
                                <p className="text-base">Active Apps</p>
                                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">132+</h1>
                                <p className="text-base">31 more will Launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner; 