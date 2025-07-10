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







export default function Home() {


const images = [
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
];

  let choose = [
    {
      "name": "100% Customer Satisfaction",
      "description": "We’re committed to delivering top-quality workmanship and outstanding service every time. Our job isn’t done until you’re completely happy. Your satisfaction is our priority.",
      "icon": <FaHandshake size={40}/>,
      
    },
    {
      "name": "Competitive Pricing",
      "description": "We offer fair, transparent pricing without compromising on quality. With us, you get great value for your money. No hidden fees, just honest rates you can trust.",
      "icon": <GiReceiveMoney size={40}/>,
      
    },
    {
      "name": "Solutions That Last",
      "description": "We use premium materials and industry-leading tools to deliver plumbing work that’s built to last. Whether it’s a repair or a full installation, our solutions add long-term value to your property improving reliability, efficiency, and even resale appeal.",
      "icon": <FaHome size={40}/>,
      
    }
  ]

 let services = [
    {
      "name": "Emergency Plumbing",
      "icon": <LuSiren size={40}/>,
      
    },
    {
      "name": "Bathroom Design & Renovation",
      "icon": <FaPencilRuler size={40}/>
    },
    {
      "name": "Walk in Showers & Wet Rooms",
      "icon": <FaShower size={40}/>
    },
    {
      "name": "Bathroom & Kitchen Plumbing",
      "icon": <MdOutlinePlumbing size={40}/>
    },
    {
      "name": "Blocked Drain Repairs",
      "icon": <GiKitchenTap size={40}/>
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
    <div className="w-full h-screen">
      <img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751783012/hero1_jukrud.jpg" alt="" className="h-full w-full object-cover bg-black opacity-25 lg:opacity-0 absolute -z-30 " />
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
        <div className="hidden lg:block w-1/2 h-full bg-white [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)]">
          <AutoSlideshow />
        </div>
      </div>
      <div className="my-20 w-full text-black mt-10">
        <div className="flex justify-center flex-col gap-10">
          <div className="text-xl font-bold rounded-full flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl font-semibold">Our Services</h1>
            <p className="font-light text-lg">Here you can find our most popular services</p>
          </div>
          <div className="mx-10">
            {
              services.map((service, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-center items-center my-3 gap-5 bg-cover bg-center bg-gray-100 p-6 rounded-2xl"
                >
                  <h1 className="font-medium text-2xl">{service.name}</h1>
                  <span className="bg-white p-3 rounded-2xl">{service.icon}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className=" w-full text-black mt-10 bg-gray-100 rounded-2xl">
        <div className="flex justify-center flex-col gap-10 py-10">
          <div className="text-xl font-bold rounded-full flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl font-semibold mb-2">Why Choose Us?</h1>
            <p className="font-light text-lg text-center mx-7">At ACE we're dedicated to maximising your................dasdasdsadasda sadasdsadasdasd dfdsadsa</p>
          </div>
          <div className="mx-10">
            {
              choose.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center my-3 gap-5 bg-cover bg-center bg-gray-100 p-6 rounded-2xl"
                >
                  <span className="bg-white p-3 rounded-2xl">{item.icon}</span>
                  <h1 className="font-medium text-2xl text-center">{item.name}</h1>
                  <p className="text-center">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="bg-black h-full w-full rounded-4xl flex flex-col justify-center">
            <div className="w-full mb-10 rounded-4xl flex flex-col justify-center items-center text-white text-3xl">
                  <FaAward size={50} className="mb-3"/>
                  <h1 className="font-semibold">Don't just take it from us</h1>
                  <p className="text-sm text-center mx-3 mt-3">We've proudly served businesses & the general public to help transform their homes</p>
            </div>
            <div className="flex flex-col gap-10 text-white mx-5">
                      {
                        reviews.map((review, i) => (
                          <div key={i}>
                          <p className="font-bold text-xl mb-1">{review.name}</p>
                          <p className="text-lg  mb-2	">{review.service}</p>
                          <p className="text-sm font-light">{review.review}</p>
                          </div>
                        ))
                      }
                    </div>
      </div>
      <div className="h-full w-full flex flex-col items-center my-10">
        <div className="text-3xl text-center font-semibold mb-10">
          <h1 className="">Our Work</h1>
          <p className="text-sm font-medium">Here is a showcase of some of our work</p>                 
        </div>
        <ImageGallery images={images}/>
        <a href="/Portfolio" className=""><Button className="mt-5 border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-black hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">
                <span className="relative">View Portfolio</span>
              </Button></a>
        </div>       
    </div>
  );
}


{/* <div className="">
                    <div>
                      <p className="text-sm">100% Customer satisfaction</p>
                    </div>
                    <div className="flex">
                      {
                        reviews.map((review, i) => (
                          <div key={i}>
                          <p className="">{review.name}</p>
                          <p className="text-sm">{review.review}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div> */}