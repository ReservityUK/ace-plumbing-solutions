import Image from "next/image";
import img from "../assets/hero1.jpg"
import { Button } from "@heroui/button";
import AutoSlideshow from "./components/AutoSlideShow";
import { LuSiren } from "react-icons/lu";


export default function Home() {


  let services = [
    {
      "name": "Emergency Plumbing",
      "description": "Fast and reliable emergency plumbing services for burst pipes, blocked drains, and urgent leaks. Licensed local plumbers available anytime – call now for immediate assistance",
      "image": "https://plus.unsplash.com/premium_photo-1663047170515-66632d2a374d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      <div className="h-full w-full text-black mt-10">
        <div className="flex justify-center items-center flex-col gap-10">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <div className="mx-10">
            {
              services.map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center my-7 gap-2 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <h1 className="font-semibold text-xl">{service.name}</h1>
                  <p className="text-center">{service.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
