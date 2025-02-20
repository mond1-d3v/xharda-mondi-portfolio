import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-transparent text-gray-200 shadow-lg p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-[30rem]">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="font-bold text-xl mb-4">Reseaux Sociaux</div>
          <p className="flex items-center mb-2 cursor-pointer">
            <RxGithubLogo className="mr-2" />
            <a href="https://github.com/mond1-d3v" className="text-sm">Github</a>
          </p>
          <p className="flex items-center mb-2 cursor-pointer">
            <RxDiscordLogo className="mr-2" />
            <span className="text-sm">Discord</span>
          </p>
          <p className="flex items-center mb-2 cursor-pointer">
            <RxLinkedinLogo className="mr-2" />
            <a href="https://www.linkedin.com/in/mondi-xharda" className="text-sm">Linkedin</a>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="font-bold text-xl mb-4">A propos</div>
          <p className="flex items-center mb-2 cursor-pointer">
            <span className="text-sm">En savoir plus</span>
          </p>
          <p className="flex items-center mb-2 cursor-pointer">
            <span className="text-sm">mondi.xharda@supdevinci-edu.fr</span>
          </p>
        </div>
      </div>

      <div className="mt-8 text-sm text-center">
        &copy; Xharda Mondi 2025. Tous les droits sont réservés.
      </div>
    </div>
  );
};

export default Footer;
