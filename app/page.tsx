import Image from "next/image";
import img from "../assets/hero1.jpg"
import { Button } from "@heroui/button";
import AutoSlideshow from "./components/AutoSlideShow";
import { LuSiren } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { MdOutlinePlumbing } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { GiKitchenTap } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { FaAward } from "react-icons/fa";
import ImageGallery from "./components/ImageGallery";
import { FaHandshake } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import ReviewWidget from "./components/RevWidget";
import { LiaPeopleCarrySolid } from "react-icons/lia";








export default function Home() {


  const images = [
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  ];

  let choose = [
    {
      "name": "100% Satisfaction",
      "description": "We’re committed to delivering top-quality workmanship and outstanding service every time. Our job isn’t done until you’re completely happy. Your satisfaction is our priority.",
      "icon": <FaHandshake size={40} />,

    },
    {
      "name": "3rd Generation Plumber",
      "description": "As a 3rd-generation plumber with decades of family experience, I bring expert knowledge and trusted craftsmanship to every job. Specialising in all aspects of domestic plumbing, from leaky taps and blocked drains to complete bathroom installations. I deliver reliable, high-quality service that homeowners can count on. If you're looking for a skilled local plumber who gets the job done right the first time, you've come to the right place.",
      "icon": <LiaPeopleCarrySolid size={40} />,

    },
    {
      "name": "Solutions That Last",
      "description": "We use premium materials and industry-leading tools to deliver plumbing work that’s built to last. Whether it’s a repair or a full installation, our solutions add long-term value to your property improving reliability, efficiency, and even resale appeal.",
      "icon": <FaHome size={40} />,
    },
    {
      "name": "Rapid Turnaround",
      "description": "We use premium materials and industry-leading tools to deliver plumbing work that’s built to last. Whether it’s a repair or a full installation, our solutions add long-term value to your property improving reliability, efficiency, and even resale appeal.",
      "icon": <FaHome size={40} />,
    }
  ]

  let services = [
    {
      "name": "Bathroom Renovation & Design",
      "link": "/services/emergency-plumbing",
      "img": "https://res.cloudinary.com/duezzgkri/image/upload/v1752089810/IMG_4543_nr2may.jpg",

    },
     {
      "name": "Walk in Showers & Wet Rooms",
      "link": "/services/walk-in-shower-wet-rooms",
      "img": "https://res.cloudinary.com/duezzgkri/image/upload/v1751821726/IMG_6814_rkvot1.jpg"
    },
    {
      "name": "Maintenance & Repairs",
      "link": "/services/walk-in-shower-wet-rooms",
      "img": "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Boiling & Central Heating",
      "link": "/services/bathrooms-kitchens",
      "img": "https://images.unsplash.com/photo-1663602692362-80e4564384c0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  let reviews = [
    {
      "name": "Luke Almond",
      "service": "Bathroom Renovation & Design",
      "review": "Fantastic Company! Really organised from start to finish. Said they would arrive Monday morning and be finished by the end of the week and they were. They organised everything from ripping out the old bathroom, plastering, tiling, plumbing, fitting and painting. I would highly recommend to anyone that wants a new bathroom or kitchen!",
    },
    {
      "name": "Jean Morriss",
      "service": "Walk in Showers & Wet Rooms",
      "review": "Alex recently fitted a new shower unit in our bathroom, he has done a fantastic job, extremely tidy & friendly, would highly recommend",
    },
    {
      "name": "Allen Tortoishell",
      "service": "Bathroom Renovation & Design",
      "review": "Just had my bathroom refurb done by Alex and his team along with Simon from Blythe ceramics who I’ve used before what can I say 10/10 absolutely fantastic will be using them again for future projects Alex is fantastic from start to finish going above and beyond to make sure the job is going along and communicating all the way 100% recommend them",
    },

  ]

  return (
    <>
      <div className="w-full h-screen">
        <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751783012/hero1_jukrud.jpg" alt="" className="h-full w-full object-cover bg-black opacity-25 xl:hidden absolute -z-30 rounded-b-3xl shadow-2xl" />
        <div className="h-full w-full flex flex-col md:mt-0 md:flex-row items-center justify-center">
          <div className="xl:w-1/2 w-3/4 md:mx-14">
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-bold">Professional & Emergency Plumbing Services in Staffordshire & Cheshire</span>
              <br />
              <span className="text-xl">Serving homes & businesses across Staffordshire and Cheshire, ACE Plumbing Solutions delivers expert plumbing repairs, maintenance, and installations with a reputation built on quality and trust.</span>
              <div className="">
                <a href="/Contact-us"><Button className="mt-5 border mr-10 p-3 rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-black hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">
                  <span className="relative">Get A Quote</span>
                </Button></a>
              </div>
            </div>
          </div>
          <div className="hidden xl:block w-1/2 h-full bg-white [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]">
            <AutoSlideshow />
          </div>
        </div>
      </div>
      <div id="services" className="flex w-full justify-center gap-10 mt-8 items-center">
        <a href="https://www.checkatrade.com/trades/aceplumbingsolutions" target="_blank">
          <img src="https://www.checkatrade.com/static/checkatradefb.png" alt="" className="w-20 object-contain grayscale " />
        </a>
        <a target="_blank" href="https://www.google.com/maps/place/Ace+Plumbing+Solutions+Ltd/@52.9392685,-2.0730622,17z/data=!4m14!1m7!3m6!1s0x487a6d24e5310d5d:0xb16cab622f284d99!2sAce+Plumbing+Solutions+Ltd!8m2!3d52.9392685!4d-2.0704873!16s%2Fg%2F11y34f96nm!3m5!1s0x487a6d24e5310d5d:0xb16cab622f284d99!8m2!3d52.9392685!4d-2.0704873!16s%2Fg%2F11y34f96nm?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D">
          <img src="https://www.pngfind.com/pngs/b/3-31594_google-5-stars-google-plus-reviews-logo-hd.png" alt="" className="w-20 object-contain grayscale" />
        </a>
        <a target="_blank" href="https://www.yell.com/biz/ace-plumbing-solutions-ltd-stoke-on-trent-10669185/">
          <img src="https://aacroadmarkingsltd.co.uk/wp-content/uploads/2021/03/yell-5-stars.png" alt="" className="w-20 object-contain grayscale" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-10 px-10">
        <h1 className="text-2xl font-semibold">Our Services</h1>
        <div className="grid grid-cols-1 w-full gap-5 mt-4 lg:grid-cols-2">
          {
            services.map((service, key) => (
              <div
                key={key}
                className="h-20 bg-no-repeat bg-cover bg-center text-white text-xl bg-blend-multiply text-center flex items-center rounded-2xl bg-black/40 lg:h-32"
                //className="rounded-2xl w-[90%] p-6 relative bg-black/40 bg-no-repeat bg-cover bg-center text-white text-xl bg-blend-multiply lg:h-32 lg:mx-5"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <h1 className="pl-3">{service.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-[90%] mx-auto text-black mt-10 bg-gray-100 rounded-2xl">
        <div className="flex justify-center flex-col pt-10  lg:flex-row lg:justify-start lg:mx-20">
          <div className="text-xl font-bold rounded-full flex flex-col justify-center items-center lg:items-start lg:mx-20 lg:w-1/2">
            <h1 className="text-center text-3xl font-semibold mb-2 lg:text-lg MY-">Why Choose Us?</h1>
            <p className="font-normal text-sm text-center mx-7 lg:mx-0 lg:font-bold lg:text-8xl lg:text-left">Plumbing that works for you</p>
            <p className="lg:text-md lg:font-light hidden lg:block lg:mt-6 lg:w-[80%]">3rd generation plumber with extensive experience in all aspects of domestic plumbing. Walk in shower and bathroom specialists. We offer full bathroom re-fit services, tiling and shower panelling; alongside a true No job too small operation for maintenance and repairs.</p>
          </div>
          <div className="mx-3 gap-10 lg:w-1/2 lg:grid lg:grid-cols-2 lg:gap-3">
            {
              choose.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center my-6 mb-10 gap-3 bg-cover bg-center bg-gray-100 rounded-2xl"
                >
                  <span className="bg-white p-3 rounded-2xl shadow-2xl">{item.icon}</span>
                  <h1 className="font-normal text-2xl text-center">{item.name}</h1>
                  <p className="text-sm text-center">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-10 w-full rounded-b-2xl flex flex-col justify-center items-center bg-black shadow-2xl">
        <div className="mb-1 mt-8 rounded-4xl flex flex-col justify-center items-center text-white text-3xl w-3/4">
          <FaAward size={50} className="mb-3" />
          <h1 className="font-semibold text-center">Don't just take it from us</h1>
          <p className="text-sm text-center mx-3 mt-3">We've proudly served businesses & the general public to help transform their homes</p>
        </div>
        <div className="flex flex-col gap-10 text-black mx-5">
          <ReviewWidget />
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center p-10">
        <div className="text-3xl text-center font-semibold">
          <h1 className="">Our Work</h1>
          <p className="text-sm font-medium">Here is a showcase of some of our work</p>
        </div>
        <ImageGallery images={images} />
        <a href="/Portfolio" className=""><Button className="mt-5 border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
  text-black hover:text-white 
  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
  hover:shadow-white hover:before:h-56 hover:before:w-56">
          <span className="relative">View Portfolio</span>
        </Button></a>
      </div>
    </>

  );
}
