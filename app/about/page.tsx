'use client';
import Image from 'next/image';
import React from 'react';
import { FaCode, FaPaintBrush, FaUserTie } from 'react-icons/fa'; 
import mkImage from '../assets/mk.png'; 
import Link from 'next/link';

const About = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center" 
      style={{ background: 'linear-gradient(180deg, #1C1C1E, #2D2D30)' }} 
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center" style={{ marginTop: '80px' }}> 
        {/* Left Section: Image */}
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center">
          <Image
            className="object-cover object-center rounded-full"
            alt="about"
            src={mkImage.src}
            width={400}
            height={400}
          />
        </div>

        {/* Right Section: About Me and Info */}
        <div className="lg:w-1/2 md:w-1/2 w-full lg:pl-10 mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#E0FFFF' }}>
            About Me
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: '#E0FFFF' }}>
            I'm a passionate frontend developer with experience in HTML, CSS, Tailwind CSS,
            JavaScript, TypeScript, React, and Next.js. I enjoy creating clean, modern, and
            responsive websites that provide a great user experience.
          </p>

          {/* Info with Icons */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <FaCode className="text-neon-green w-8 h-8 mr-4" style={{ color: '#39FF14' }} />
              <div>
                <h2 className="text-xl font-semibold" style={{ color: '#E0FFFF' }}>Frontend Development</h2>
                <p className="text-base leading-relaxed" style={{ color: '#E0FFFF' }}>
                  Specializing in building responsive web applications using modern frameworks.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaPaintBrush className="text-neon-green w-8 h-8 mr-4" style={{ color: '#39FF14' }} />
              <div>
                <h2 className="text-xl font-semibold" style={{ color: '#E0FFFF' }}>UI/UX Design</h2>
                <p className="text-base leading-relaxed" style={{ color: '#E0FFFF' }}>
                  Focused on crafting visually appealing and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaUserTie className="text-neon-green w-8 h-8 mr-4" style={{ color: '#39FF14' }} />
              <div>
                <h2 className="text-xl font-semibold" style={{ color: '#E0FFFF' }}>Team Collaboration</h2>
                <p className="text-base leading-relaxed" style={{ color: '#E0FFFF' }}>
                  Experienced in collaborating with teams to build and deploy high-quality products.
                </p>
              </div>
            </div>
          </div>

          {/* Button Example */}
          <div className="mt-6">
            <Link href={'/contact'}>
              <button className="bg-purple-500 text-white py-2 px-6 rounded-md transition duration-300 transform hover:bg-neon-green hover:text-black"
                style={{ backgroundColor: '#9B51E0', color: '#E0FFFF' }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#39FF14'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9B51E0'}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
