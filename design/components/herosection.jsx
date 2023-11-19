import React from "react";
import Image from "next/image";
import Avatar from "../assets/images/matzoo.PNG"


const HeroSection = () => {
  return (
    <section id="about" className="flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold text-white mt-10 mb-1 md:mb-2">
        Bonjour et bienvenue, vous êtes au bon endroit !
      </h1>

      <section className=" md:flex md:items-center md:justify-between md:flex-row-reverse md:text-left md:gap-8 p-8 text-center md:h-auto h-screen bg-black-800">
        <img
          src={Avatar.src}
          alt="avatar"
          className="w-60vw md:w-30vw transition duration-100 linear rounded-full"
        />

        <div>
          <h2 className="font-medium text-2xl mb-4">Bonjour !</h2>
          <p className="m-0 leading-6 text-base opacity-70">
            Je m'appelle Matéo Slyemi et je suis développeur web. Ayant suivi la formation
            d'intégrateur web d'OpenClassrooms, je dispose de toutes les capacités permettant de
            créer le site web qu'il vous faut ! Je serai capable de créer un projet via différentes
            technologies que je mentionne ci-dessous. Pour me décrire, je suis à l'écoute,
            déterminé et organisé dans mon travail. Je vous laisse apprécier les différents projets
            que j'ai pu concevoir lors de mon parcours. Bon voyage !
          </p>
        </div>
      </section>
    </section>
  );
};


export default HeroSection;