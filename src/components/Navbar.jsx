import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
const Navbar=()=>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 rounded bg-neutral-900" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/ritul-singh-7738a2227")}/>
            <FaGithub onClick={()=>window.open("https://github.com/ritul01")}/>
            <FaSquareXTwitter onClick={()=>window.open("https://x.com/ritul_1?s=08")}/>
            {/* <FaInstagram onClick={()=>window.open("https://www.linkedin.com/in/ritul-singh-7738a2227")}/> */}
            <MdEmail onClick={()=>window.open("ritulssoff000@gmail.com")}/>
        </div>
    </nav>
}

export default Navbar