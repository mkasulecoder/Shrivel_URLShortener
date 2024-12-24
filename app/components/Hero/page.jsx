"use client";

import Image from "next/image";
import RedirectForm from "../RedirectForm/page";
import AllURLs from "../AllUrls/page";
import { useState } from "react";

const Hero = () => {
  const [originalUrl, setURL] = useState("");
  return (
    <>
      <div className='w-full min-h-[90dvh] flex flex-col justify-center items-center'>
        <section className='w-full'>
          <div className='w-full justify-center items-center content-center'>
            <div className='flex flex-row w-4/5 h-[60dvh] justify-between items-center content-between space-y-5 md:space-x-5 mx-auto text-center'>
              <div className='md:w-1/2 w-full flex flex-col justify-center items-center py-12 space-y-4'>
                <h1 className='text-4xl text-blue-950 font-extrabold mx-auto md:text-5xl'>
                  Shorten and customize your url with Shrivel
                </h1>
                <p className='max-w-2xl mx-auto text-gray-900'>
                  The ultimate way to generate short customized URLs on the go.
                  Build your brand&#39;s recognition and get detailed insights
                  on how your links are performing.
                </p>
                <div className='flex justify-center items-center gap-x-4 text-gray-400 text-sm'>
                  <div className='flex'>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#14b8a6'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                    </svg>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#14b8a6'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                    </svg>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#14b8a6'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                    </svg>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#14b8a6'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                    </svg>
                    <svg
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                    </svg>
                  </div>
                  <p>
                    <span className='text-gray-500'>4.5</span> by over 850,000
                    users
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 w-full hidden md:flex justify-center items-center'>
                <Image
                  src='./illustration-working.svg'
                  width={600}
                  height={600}
                  alt='Hero'
                  className='hidden md:flex'
                />
              </div>
            </div>
            <RedirectForm />
            {/* <AllURLs /> */}
          </div>

          <div
            className='absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg'
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <div className='border-t border-gray-100'></div>
        </section>
      </div>
    </>
  );
};

export default Hero;
