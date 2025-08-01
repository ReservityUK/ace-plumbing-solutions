"use server"

import { Button } from "@heroui/button";
import AutoSlideshow from "./components/AutoSlideShow";
import { FaAward } from "react-icons/fa";
import ImageGallery from "./components/ImageGallery";
import { FaHandshake } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ReviewWidget from "./components/RevWidget";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default async function Home() {

  const images = [
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
    'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
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
      "name": "10+ Years Experience",
      "description": "As a 3rd-generation plumber with decades of family experience, I bring expert knowledge and trusted craftsmanship to every job, specialising in all aspects of domestic plumbing.",
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
      "icon": <AiFillClockCircle size={40} />,
    }
  ]

  let services = [
    {
      "name": "Bathroom Renovation & Design",
      "link": "/services/bathroom-renovation-design",
      "img": "https://res.cloudinary.com/duezzgkri/image/upload/v1752089810/IMG_4543_nr2may.jpg",

    },
    {
      "name": "Walk in Showers & Wet Rooms",
      "link": "/services/walk-in-showers-wet-rooms",
      "img": "https://res.cloudinary.com/duezzgkri/image/upload/v1751821726/IMG_6814_rkvot1.jpg"
    },
    {
      "name": "Maintenance & Repairs",
      "link": "/services/maintenance-repairs",
      "img": "https://images.unsplash.com/photo-1620653713380-7a34b773fef8?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "Boilers & Central Heating",
      "link": "/services/boilers-heating",
      "img": "https://images.unsplash.com/photo-1663602692362-80e4564384c0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <div className="">
      {/* <div className="w-full h-screen xl:px-10">
        <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751783012/hero1_jukrud.jpg" alt="" className="h-full w-full object-cover bg-black opacity-25 xl:hidden absolute -z-30 rounded-b-3xl shadow-2xl" />
        <div className="h-full w-full flex flex-col md:mt-0 md:flex-row items-center justify-center">
          <div className="xl:w-1/2 w-3/4 md:mx-14">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Welcome to ACE Plumbing Solutions</p>
              <h1 className="text-4xl md:text-6xl font-bold">Professional & Emergency Plumbing Services in Staffordshire & Cheshire</h1>
              <br />
              <span className="text-xl">Serving homes & businesses across Staffordshire and Cheshire, ACE Plumbing Solutions delivers expert plumbing repairs, maintenance, and installations with a reputation built on quality and trust.</span>
              <div className="">
                <a href="/Contact-us"><Button className="mt-5 border mr-10 p-3 rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-black hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">p
                  <span className="relative">Get A Quote</span>
                </Button></a>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex xl:justify-center xl:items-center w-1/2 h-full bg-white">
            <AutoSlideshow />
          </div>
        </div>
      </div> */}
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-1 place-items-center bg-black lg:bg-white rounded-b-2xl">
      <div className="lg:hidden absolute h-screen w-full z-10 opacity-40">
        <AutoSlideshow />
      </div>
      <div className="p-10 flex flex-col gap-5 justify-center h-full text-white lg:text-black z-20">
        <p className="font-bold">Welcome to ACE Plumbing Solutions</p>
        <h1 className="text-4xl md:text-6xl font-bold">Professional & Emergency Plumbing Services in Staffordshire & Cheshire</h1>
        <p className="text-xl">Serving homes & businesses across Staffordshire and Cheshire, ACE Plumbing Solutions delivers expert plumbing repairs, maintenance, and installations with a reputation built on quality and trust.</p>

        <div className="">
                <a href="/contact"><Button className="mt-5 border mr-10 p-3 rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-white hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56 font-semibold">
                  <span className="relative">Get A Quote</span>
                </Button></a>
              </div>
      </div>
      <div className="overflow-hidden h-full w-full p-20 hidden lg:block">
        <AutoSlideshow />
      </div>
      </div>
      <div id="services" className="flex w-full justify-center gap-10 my-4 items-center">
        <a href="https://www.checkatrade.com/trades/aceplumbingsolutions" target="_blank">
          <img src="https://www.checkatrade.com/static/checkatradefb.png" alt="" className="w-20 object-contain " />
        </a>
        <a target="_blank" href="https://www.google.com/maps/place/Ace+Plumbing+Solutions+Ltd/@52.9392685,-2.0730622,17z/data=!4m14!1m7!3m6!1s0x487a6d24e5310d5d:0xb16cab622f284d99!2sAce+Plumbing+Solutions+Ltd!8m2!3d52.9392685!4d-2.0704873!16s%2Fg%2F11y34f96nm!3m5!1s0x487a6d24e5310d5d:0xb16cab622f284d99!8m2!3d52.9392685!4d-2.0704873!16s%2Fg%2F11y34f96nm?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D">
          <img src="https://www.pngfind.com/pngs/b/3-31594_google-5-stars-google-plus-reviews-logo-hd.png" alt="" className="w-20 object-contain" />
        </a>
        <a target="_blank" href="https://www.yell.com/biz/ace-plumbing-solutions-ltd-stoke-on-trent-10669185/">
          <img src="https://aacroadmarkingsltd.co.uk/wp-content/uploads/2021/03/yell-5-stars.png" alt="" className="w-20 object-contain" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-7 px-5 lg:px-10">
        <div className="text-left w-full">
        {/* <p className="font-bold text-center">Here Are Our Most Popular Services</p> */}
        <h1 className="text-3xl font-semibold text-center">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 w-full gap-5 mt-4 lg:grid-cols-2">
          {
            services.map((service, key) => (
              <a href={service.link} key={key}>
                <div
                className="h-20 bg-no-repeat bg-cover bg-center text-white text-xl bg-blend-multiply 
                text-center flex items-center rounded-2xl bg-black/40 lg:h-64 lg:text-2xl hover:drop-shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg lg:grayscale lg:hover:grayscale-0"
                //className="rounded-2xl w-[90%] p-6 relative bg-black/40 bg-no-repeat bg-cover bg-center text-white text-xl bg-blend-multiply lg:h-32 lg:mx-5"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <h1 className="pl-3">{service.name}</h1>
              </div>
              </a>
            ))
          }
        </div>
      </div>
      <div className="mx-5 lg:mx-10 mb-10">
        <div className="w-full text-black mt-10 bg-[#F9F3EF] h-full rounded-2xl flex">
          <div className="flex justify-center flex-col py-10 lg:flex-row lg:justify-start lg:mx-10">
            <div className="text-xl font-bold rounded-full flex flex-col justify-center items-center lg:items-start lg:mx-20 lg:w-1/2">
              <div className="mb-3">
              <FaHandshake size={40} />
              </div>
              <h1 className="text-center text-5xl font-semibold mb-2 lg:text-lg">Why Choose ACE?</h1>
              <p className="text-sm text-center mx-7 lg:mx-0 lg:font-bold lg:text-8xl lg:text-left font-bold mb-3">Plumbing solutions that work for you</p>
              <p className="lg:text-md lg:font-light hidden lg:block lg:mt-6 lg:w-[80%] text-lg">3rd generation plumber with extensive experience in all aspects of domestic plumbing. Walk in shower and bathroom specialists. We offer full bathroom re-fit services, tiling and shower panelling; alongside a true No job too small operation for maintenance and repairs.</p>
            </div>
            <div className="mx-3 lg:w-1/2 lg:grid lg:grid-cols-2">
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
          </div>
        </div>
      </div>
      <div className="w-full px-5 lg:px-10 mb-10">
        <div className="flex flex-col md:flex-row text-center justify-end items-center">
          <div className="md:w-1/2 flex justify-start items-center">
            <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1753640381/481358116_9611535752244677_5508023411106141824_n_sioybc.jpg" alt="" className="object-contain rounded-full px-5 mt-2 h-72 md:h-full md:w-3/4" />
          </div>
          <div className="md:w-1/2 text-left my-5 md:h-screen md:flex md:flex-col md:justify-center">
            <FaCheck size={40} className="mb-1 text-center mx-auto"/>
            <h3 className="text-center font-bold">10+ Years Experience</h3>
            <h1 className="font-bold text-7xl text-center mb-5">About Us</h1>
            <p className="mt-2 text-left">At ACE Plumbing Solutions, we bring over 10 years of professional experience and more than 35 years of family expertise in plumbing and heating to homes and businesses across Staffordshire and Cheshire.<br /><br />

              We specialise in all aspects of domestic and commercial plumbing, including heating and plumbing services, maintenance and repairs, bespoke bathroom design and fitting, and the installation of walk-in showers and wet rooms. Whether you need a small repair or a full bathroom renovation, we deliver reliable, high-quality workmanship tailored to your needs.<br /><br />

              Fully Gas Safe registered and backed by comprehensive insurance, ACE Plumbing Solutions is committed to safety, quality, and customer satisfaction. We take pride in offering transparent, cost-effective solutions with minimal disruption to your property.
            </p>
            
          </div>
        </div>
      </div>
      <div className="mx-5 lg:mx-10 mb-10">
        <div className="w-full rounded-2xl flex flex-col justify-center items-center bg-[#1B3C53] shadow-2xl">
          <div className="mb-1 mt-8 rounded-4xl flex flex-col justify-center items-center text-white text-3xl w-3/4">
            <FaAward size={50} className="mb-3" />
            <p className="text-sm font-bold my-2">Don't just take it from us</p>
            <h1 className="font-semibold text-center text-4xl">100% Customer Satisfaction</h1>
          </div>
          <div className="flex flex-col gap-10 text-black mx-5">
            <ReviewWidget />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center px-5 lg:px-10 my-10">
        <div className="text-3xl text-center font-semibold">
          <div className="flex justify-center">
              <MdOutlineWork size={50} className="" />
          </div>
          <p className="text-sm font-bold">Showcasing ACE's Latest Projects</p>
          <h1 className="text-5xl">Our Work</h1>
        </div>
        <ImageGallery images={images} />
        <a href="/portfolio" className=""><Button className="mt-5 border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
  text-black hover:text-white 
  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
  hover:shadow-white hover:before:h-56 hover:before:w-56">
          <span className="relative">View Portfolio</span>
        </Button></a>
      </div>
    </div>
  );
}
