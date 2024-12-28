import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact Me</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          Brahmputra Hostel, Ashok Rajpath, Patna, 800006, Bihar
        </p>
        <p className="my-4">+91 7378125935</p>
        <a href="#" className="border-b">
          ritulsingh123700@gmail.com
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/ritul-singh-7738a2227")
          }
          className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
        />
        <FaGithub
          onClick={() => window.open("https://github.com/ritul01")}
          className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
        />
        <FaXTwitter
          onClick={() => window.open("https://x.com/ritul_1?s=08")}
          className="cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
        />
        {/* <MdEmail onClick={(on)=>window.open("ritulssoff000@gmail.com")}/>  */}
        <div className="flex justify-center items-center">
          <a
            href="mailto:ritulsingh123700@gmail.com" // Replace with your email address
            className="text-black-500 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
            title="Send me an email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
