import { Button } from "@heroui/button"

export const Navbar = () => {
    return <>
        <div className="fixed w-full top-5 z-50">
            <div className="flex justify-center text-white">
                <div className="h-20 w-3/4 bg-black/50 lg:flex rounded-full backdrop-blur-3xl hidden justify-between items-center drop-shadow-2xl px-5">
                    <a href="/" className="p-4 w-40 object-contain invert">                    
                    <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751784778/logo_cjqpyt.png" alt="" className="" />
                    </a>
                    <div className="">
                        <ul className="flex gap-6 h-full">
                            <a href="/"><li className="relative transition duration-300 ease-in-out hover:text-gray-300
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out
                            hover:before:w-full">Home</li></a>
                            <a href="/Services"><li className="relative transition duration-300 ease-in-out hover:text-gray-300
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out
                            hover:before:w-full">Services</li></a>
                            <a href='/Portfolio'><li className="relative transition duration-300 ease-in-out hover:text-gray-300
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out
                            hover:before:w-full">Portfolio</li></a>
                            <a href='/About-us'><li className="relative transition duration-300 ease-in-out hover:text-gray-300
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out
                            hover:before:w-full">About Us</li></a>
                        </ul>
                    </div>
                    <div>
                        <a href="/Contact-us"><Button className="border mr-10 p-3 rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-white hover:text-black 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10">Contact Us</span>
                        </Button></a>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}