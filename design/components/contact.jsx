import React from "react";
import {EnvelopeIcon} from "@heroicons/react/24/outline";


const ContactSection = () => {
    return (
        <section id="contact">


        
            <h2 className="text-center text-4xl font-bold text-white mt-20">Contact</h2>

            

        <div className="flex  flex-col md:flex-row md:justify-around items-center">

        <div className="flex flex-col justify-around ">

       
        <a target="_blank"  href="mailto:mslyemi@gmail.com">
          <EnvelopeIcon /> 
        </a>

        <a target="_blank"  href="https://Linkedin.com">
          <img src="/icons8-linkedin-48.png"
          width={100}
          height={60} />
        </a>
        <a target="_blank"  href="https://github.com">
          <img
          width={100}
          height={60}
          src="/icons8-github-48.png"
          
          
          />
        </a>
        
        </div>

        <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Formulaire de contact</h2>

    <form className="flex flex-wrap">
      <input
        type="text"
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Nom Prénom"
      />
      <input
        type="email"
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Email"
      />
      <textarea
        name="message"
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        
        className="bg-grey-700 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-grey-600 transition ease-in-out duration-150"
      >
        Envoyer
      </button>
    </form>
  </div>
        </div>

        </div>

        </section>
    );
};

export default ContactSection;