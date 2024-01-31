import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  
  return (
    <section id="contact">
      <h2 className="text-center text-4xl font-bold text-white mt-20">Contact</h2>
      <div className="flex flex-row align-center justify-around mt-20">

      <div className="flex flex-col md:flex-row md:justify-around items-center">
      <div className="flex flex-col justify-around">
          <a target="_blank" href="mailto:mslyemi@gmail.com">
            <EnvelopeIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mateo-slyemi-565004245/">
            <img src="/icons8-linkedin-96.png"  alt="LinkedIn" className="object-cover"/>
          </a>
          <a target="_blank" href="https://github.com/Matzoo38">
            <img src="/icons8-github-96.png"  alt="GitHub" className="object-cover" />
          </a>

          <a target="_blank" href="https://discord.com/users/355778514768756737">

            <img src="/icons8-discorde-96.png" alt="Discord" className="object-cover"/>

          </a>
        </div>
      </div>

      
      </div>

    </section>
  );
};

export default ContactSection;

