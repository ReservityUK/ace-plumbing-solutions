"use client"
import settings from "../../settings.json"
import * as motion from "motion/react-client"
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { Button } from "@heroui/button"

export default function MobileNav() {

    const [isOpen, setIsOpen] = useState(false);

    const linkList = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                // type: "spring",
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    return (
        <div className="w-screen fixed lg:hidden top-0 bg-white/80 shadow-xl z-50">
            <div className="flex w-screen justify-between items-center p-3 px-10 bg-transparent">
                <a href="/"><img src="https://res.cloudinary.com/duezzgkri/image/upload/v1751784778/logo_cjqpyt.png" alt="" className="h-14 z-50"/></a>
                <div className="flex justify-center items-center gap-4 z-50">
                    {isOpen ? (
                    <a
                        className="bg-black p-3 rounded-full transition ease-in-out"
                        onClick={() => setIsOpen(!isOpen)}>
                        <X color="#ffffff" className=""/>
                    </a>
                ) : (
                    <a
                        className="bg-gray-200 p-3 rounded-full transition ease-in-out flex justify-center items-center"
                        onClick={() => setIsOpen(!isOpen)}>
                        <Menu />
                    </a>
                )}
                </div>
                
            </div>




            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { y: 0, opacity: 1, display: "block" },
                    closed: { y: "-100%", opacity: 0, transitionEnd: { display: "none" } },
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 bg-gray-200 shadow-md z-10 h-screen w-screen p-3"
            >
                <div className="h-full w-full flex flex-col justify-center">
                    <motion.ul
                        className="flex gap-10 flex-col h-3/4 justify-center"
                        variants={linkList}
                        initial="hidden"
                        animate="visible"
                    >
                        {settings.links.map((link, index) => (
                            <motion.li
                                key={index}
                                animate={isOpen ? "open" : "closed"}
                                variants={{
                                    open: { y: 0, scale: 1 },
                                    closed: { y: -20, scale: 0 }
                                }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                }}
                            >
                                <a
                                    className="font-sans font-extrabold text-5xl"
                                    href={link.link}>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div
                        className="mt-6 flex justify-center"
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { y: 0, scale: 1 },
                            closed: { y: -20, scale: 0 }
                        }}
                        transition={{
                            duration: 0.4,
                            delay: 1,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
<Button className="border rounded-full hover:bg-gray-800 relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all 
    text-black hover:text-white 
    before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out 
    hover:shadow-white hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">Get A Quote</span>
        </Button>                    </motion.div>
                </div>

            </motion.nav>
        </div>
    )
}