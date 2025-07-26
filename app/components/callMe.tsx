import { MdOutlinePhone } from "react-icons/md";
export default function CallMe(){
    return (
        <div className="md:hidden">
            <a href="tel:+447376048596"><div className="fixed bottom-0 right-0 m-4 bg-green-300 z-50 rounded-full p-3 shadow-2xl">
                <MdOutlinePhone size={40} color="white"/>
        </div></a>
        </div>
        
    )
}