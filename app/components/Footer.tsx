import React from 'react';
import Link from 'next/link'; 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-[#131315] body-font mb-0">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl text-[#E0FFFF]">Mohsin Khan</span>
          </a>
          <p className="text-sm text-[#E0FFFF] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 MOHSIN KHAN
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target='_blank' className="text-[#39FF14] hover:text-[#9B51E0] mx-2" href="https://www.facebook.com/mohsin.lkk.5" passHref>
              
                <FaFacebookSquare   className="w-6 h-6 "  />
              
            </Link>
            <Link target='_blank' className="text-[#39FF14] hover:text-[#9B51E0] mx-2" href="https://www.linkedin.com/in/mohsinkhanlkk/" passHref>
              
                <FaLinkedin className="w-6 h-6 " />
              
            </Link>
            <Link target='_blank' className="text-[#39FF14] hover:text-[#9B51E0] mx-2" href="https://github.com/MohsinKhan94" passHref>
              
                <FaGithub className="w-6 h-6" />
              
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
