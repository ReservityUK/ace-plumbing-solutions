"use server"

import { Button } from "@heroui/button";
import ImageGallery from "../components/ImageGallery";

const images: string[] = [
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821707/IMG_8970_nrj5z7.jpg',
  'https://res.cloudinary.com/duezzgkri/image/upload/v1751821715/IMG_3854_kmzvkh.jpg',
];

export default async function Portfolio(){
    return (
        <div className="mt-30 flex flex-col mx-5 gap-2">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p>Think we can transform your home? Click the button below to get in touch!</p>
        <a href="/Contact-us"><Button className="mt-5 border mr-10 p-3 rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-black hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">
                <span className="relative">Get A Quote</span>
              </Button></a>
        <ImageGallery images={images}/>
        </div>
    )
}