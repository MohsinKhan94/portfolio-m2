import React from 'react';

const Contact = () => {
  return (
    <div>
      <section
        className="text-[#E0FFFF] body-font relative pt-20"
        style={{
          backgroundColor: '#1C1C1E',
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
          backgroundSize: '50px 50px',
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-[#E0FFFF]">
              Contact Me
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="https://formspree.io/f/mdkokalp" method="POST">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-[#E0FFFF]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-[#2C2C2E] bg-opacity-100 rounded border border-[#39FF14] focus:border-[#9B51E0] focus:bg-[#3A3A3C] focus:ring-2 focus:ring-[#9B51E0] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-[#E0FFFF]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-[#2C2C2E] bg-opacity-100 rounded border border-[#39FF14] focus:border-[#9B51E0] focus:bg-[#3A3A3C] focus:ring-2 focus:ring-[#9B51E0] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-[#E0FFFF]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-[#2C2C2E] bg-opacity-100 rounded border border-[#39FF14] focus:border-[#9B51E0] focus:bg-[#3A3A3C] focus:ring-2 focus:ring-[#9B51E0] h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-[#1C1C1E] bg-[#39FF14] border-0 py-2 px-8 focus:outline-none hover:bg-[#9B51E0] rounded text-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
