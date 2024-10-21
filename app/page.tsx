import React from 'react';
import Image from 'next/image';
import mkImage from '../app/assets/mk.png';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <section className="body-font bg-[#1C1C1E] pt-20"> {/* Add padding top here */}
        <div className="text-[#1C1C1E] container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#39FF14]">
              Hi I'm 
              <br className="hidden lg:inline-block" />
              <span className="text-[#9B51E0]">MOHSIN KHAN</span>
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              I'm Mohsin Khan, a frontend developer passionate about crafting intuitive web applications. Skilled in HTML, CSS, JavaScript, and frameworks like React and Next.js, I love turning ideas into reality.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="inline-flex text-white bg-[#39FF14] border-0 py-2 px-6 focus:outline-none hover:bg-[#9B51E0] rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-[50%] mx-auto"
              alt="hero"
              src={mkImage.src}
              width={400} 
              height={400} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
