"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Veuillez remplir le captcha");
      return;
    }

    emailjs
      .sendForm("service_f38tttp", "template_jwsi867", e.target, "FWEJkSn89TUYJtPv-")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Effectuer des opérations côté client ici
    // Par exemple, ajouter des écouteurs d'événements, etc.
  }, []); // Le tableau vide signifie que cela s'exécutera une seule fois après le rendu initial

  return (
    <section id="contact">
      <h2 className="text-center text-4xl font-bold text-white mt-20">Contact</h2>

      <div className="flex flex-col md:flex-row md:justify-around items-center">
      <div className="flex flex-col justify-around">
          <a target="_blank" href="mailto:mslyemi@gmail.com">
            <EnvelopeIcon />
          </a>
          <a target="_blank" href="https://Linkedin.com">
            <img src="/icons8-linkedin-48.png" width={100} height={60} alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://github.com">
            <img src="/icons8-github-48.png" width={100} height={60} alt="GitHub" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center h-screen dark">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Formulaire de contact</h2>

            <form onSubmit={sendEmail} className="flex flex-wrap">
              <input
                type="text"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Nom Prénom"
              />
              <input
                type="email"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Email"
              />
              <textarea
                name="message"
                value={formValues.text}
                onChange={(e) => setFormValues({ ...formValues, text: e.target.value })}
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

