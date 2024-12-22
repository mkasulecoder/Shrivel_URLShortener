"use client";

import { useState, useEffect } from "react";
import AllURLs from "../AllUrls/page";

const api = process.env.NEXT_PUBLIC_API_URL;

const RedirectForm = () => {
  const [customName, setCustomName] = useState("");
  const [originalUrl, setURL] = useState("");
  const [postStatus, setPostStatus] = useState("");
  const [getUrls, setGetURls] = useState([]);

  const handleUserInput = async (event) => {
    event.preventDefault();

    try {
      const postResponse = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl, customName }),
      });

      if (!postResponse.ok) {
        throw new Error(`Failed to add URL to the DB: ${postResponse.status}`);
      }

      setPostStatus("URL Added Successfully");
      setTimeout(() => setPostStatus(""), 2000);

      // Fetch data from db
      const getResponse = await fetch(api, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!getResponse.ok) {
        throw new Error(
          `Failed to get URLs from the DB: ${getResponse.status}`
        );
      }
      const { data: res_get_urls } = await getResponse.json();
      setGetURls(res_get_urls);
    } catch (err) {
      throw new Error(`Server Error, ${err}`);
    }
  };

  return (
    <>
      <div className='py-12 flex flex-col justify-center items-center w-full'>
        <div className='relative bg-neutral-100 flex flex-col justify-center content-center items-center w-full h-full'>
          <form
            onSubmit={handleUserInput}
            className='w-4/5 absolute top-0 flex flex-col py-14 bg-blue-950 rounded-lg md:flex-row justify-center items-center md:space-x-4 space-y-2 lg:space-y-0'
          >
            <div>
              <input
                type='text'
                value={customName}
                onChange={(e) => {
                  setCustomName(e.target.value);
                }}
                placeholder='Enter your custom name'
                className='w-full px-3 py-2.5 bg-white focus:bg-neutral-100 duration-150 outline-none rounded-lg shadow sm:max-w-sm smw:w-auto'
              />
            </div>
            <div>
              <input
                type='text'
                value={originalUrl}
                onChange={(e) => setURL(e.target.value)}
                placeholder='Enter your URL'
                className='w-full px-3 py-2.5 bg-white focus:bg-neutral-100 duration-150 outline-none rounded-lg shadow sm:max-w-sm smw:w-auto'
              />
            </div>
            <div className='flex flex-row justify-between items-center space-x-4'>
              <button
                type='submit'
                className='flex items-center justify-center gap-x-2 py-2.5 px-4 w-full text-sm text-white font-semibold bg-teal-600 duration-150 rounded-lg sm:mt-0 sm:w-auto'
              >
                Shorten URL
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='#fff'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <span className='text-[12px] text-teal-300 font-semibold'>
                {postStatus}
              </span>
            </div>
          </form>
        </div>
      </div>
      <AllURLs allUrls={getUrls} originalURL={originalUrl} />
    </>
  );
};

export default RedirectForm;
