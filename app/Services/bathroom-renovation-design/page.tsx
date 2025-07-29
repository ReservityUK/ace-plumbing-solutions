import { Button } from "@heroui/button"

import { FaHandshake } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { AiFillClockCircle } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import ImageGallery from "@/app/components/ImageGallery";

const images = [
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  ];

let brandImages : any[] = [
    "https://res.cloudinary.com/duezzgkri/image/upload/v1753814539/lusso-logo_1_szwlsf.png",
    "https://res.cloudinary.com/duezzgkri/image/upload/v1753814397/Bristan-JH_zlhx9x.webp",
    "https://res.cloudinary.com/duezzgkri/image/upload/v1753738766/Eastbrook-1_vkpwuj.png",
]

let choose = [
    {
      "name": "5 Year Warranty",
      "description": "We’re committed to delivering top-quality workmanship and outstanding service every time. Our job isn’t done until you’re completely happy. Your satisfaction is our priority.",
      "icon": <FaAward size={40} />,

    },
    {
      "name": "Minimal Distruption",
      "description": "As a 3rd-generation plumber with decades of family experience, I bring expert knowledge and trusted craftsmanship to every job, specialising in all aspects of domestic plumbing.",
      "icon": <FaRegThumbsUp size={40} />,

    },
    {
      "name": "OAP Discount",
      "description": "We use premium materials and industry-leading tools to deliver plumbing work that’s built to last. Whether it’s a repair or a full installation, our solutions add long-term value to your property improving reliability, efficiency, and even resale appeal.",
      "icon": <FaPercentage size={40} />,
    },
    {
      "name": "Built to Last",
      "description": "We use premium materials and industry-leading tools to deliver plumbing work that’s built to last. Whether it’s a repair or a full installation, our solutions add long-term value to your property improving reliability, efficiency, and even resale appeal.",
      "icon": <AiFillClockCircle size={40} />,
    }
  ]



export default function BathroomRenovationDesign(){
    return (
        <>
        <div className="w-full">
        <div 
        className="h-72 relative bg-blend-multiply bg-cover rounded-b-2xl bg-black/40 lg:w-3/4 lg:bg-center lg:mt-28 lg:rounded-2xl lg:mx-auto"
        style={{ backgroundImage: "url(https://res.cloudinary.com/duezzgkri/image/upload/v1751783012/hero1_jukrud.jpg)" }}
        >
        <div className="flex w-full h-full justify-start items-end p-5 font-bold">
        <h1 className="z-50 text-white bottom-0 text-4xl">Bathroom Design & Renovation</h1>
        </div>
        </div>
        <div className="mt-5 text-right mx-4 flex flex-col justify-end items-end lg:mx-10 lg:justify-center lg:items-center">
        <p className="font-light">Experts in Shower Installations</p>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 w-[75%]"/>
        <h1 className="text-4xl font-bold">Transform your bathroom with our Bathroom Design & Renovation solutions</h1>
        </div>
         <div className="flex flex-row justify-between lg:justify-center lg:gap-24 items-center mx-5 mt-1">
            {
                brandImages.map((brand, key) => (
                    <div key={key}>
                        <img src={brand} alt="" className="w-24"/>
                    </div>
                ))
            }
        </div>
        <div className="flex flex-row mx-10 justify-center gap-5 flex-1 my-5">
            <div className="w-1/2 flex">   
                <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1752089814/IMG_4407_hqgqba.jpg" alt="" className="rounded-xl object-cover"/>
            </div>  
            <div className="w-1/2 flex">
                <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg" alt="" className="rounded-xl object-cover"/>
            </div>
        </div>
        <div className="w-full flex justify-center">
            <a href="/contact" className=""><Button className="mt-5 border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
  text-black hover:text-white 
  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
  hover:shadow-white hover:before:h-56 hover:before:w-56">
          <span className="relative">Get a Quote</span>
        </Button></a>
        </div>
                <div className="mx-5 lg:mx-10 mb-10">
                    <div className="w-full text-white mt-10 bg-[#1B3C53] h-full rounded-2xl flex">
                        <div className="flex justify-center flex-col py-10 lg:flex-row lg:justify-start lg:mx-10">
                            <div className="text-xl font-bold rounded-full flex flex-col justify-center items-center lg:items-start lg:mx-20 lg:w-1/2">
                                <h1 className="text-center text-5xl font-semibold mb-2 lg:text-lg">You're in the right hands</h1>
                                <p className="text-sm text-center mx-7 lg:mx-0 lg:text-8xl lg:text-left font-light mb-3">We've got the paperwork to back it up</p>
                                <p className="lg:text-md lg:font-light hidden lg:block lg:mt-6 lg:w-[80%] text-lg">3rd generation plumber with extensive experience in all aspects of domestic plumbing. Walk in shower and bathroom specialists. We offer full bathroom re-fit services, tiling and shower panelling; alongside a true No job too small operation for maintenance and repairs.</p>
                            </div>
                            <div>
                                <a href="https://www.checkatrade.com/trades/aceplumbingsolutions" target="_blank">
                                <img src="https://www.checkatrade.com/static/checkatradefb.png" alt="" className="w-32 mt-4 object-contain invert brightness-0 mx-auto" />
                            </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="mx-3 lg:w-3/4 lg:mx-auto lg:grid lg:grid-cols-2">
              {
                choose.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center gap-3 bg-cover bg-center rounded-2xl my-10 md:my-3"
                  >
                    <span className="bg-white p-3 rounded-2xl shadow-2xl">{item.icon}</span>
                    <h1 className="font-normal text-2xl text-center">{item.name}</h1>
                    <p className="text-sm text-center w-3/4 ">{item.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="h-full w-full flex flex-col items-center px-5 lg:px-10 my-10">
                    <div className="text-3xl text-center font-semibold">
                      <p className="text-sm font-light">Like what you see?</p>
                      <h1 className="text-4xl">Check out your latest projects</h1>
                    </div>
                    <ImageGallery images={images} />
                    <a href="/Portfolio" className=""><Button className="mt-5 border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
              text-black hover:text-white 
              before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
              hover:shadow-white hover:before:h-56 hover:before:w-56">
                      <span className="relative">View Portfolio</span>
                    </Button></a>
                  </div>
            </div>
        </>
    )
}