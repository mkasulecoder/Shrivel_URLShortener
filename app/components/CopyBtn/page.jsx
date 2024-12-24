"use client";
import React, { useState} from 'react'

const CopyBtn = ({ shortURL }) => {
    const [isCopied, setIsCopied] = useState(false);

        const handleCopyURL = async () => { 
        try { 
            await navigator.clipboard.writeText(shortURL);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) { 
            alert(`Error: ${err}`);
        }
    }
    
  return (
      <>
        {isCopied ? (
            <button
              className='flex items-center justify-center gap-x-2 py-2.5 px-4 w-full text-white font-semibold bg-blue-950 rounded-lg sm:mt-0 sm:w-auto'>Copied</button>
          ): (
            <button
              onClick={handleCopyURL}
              className='flex items-center justify-center gap-x-2 py-2.5 px-4 w-full text-white font-semibold bg-teal-500 hover:bg-teal-400 duration-150  rounded-lg sm:mt-0 sm:w-auto'>Copy</button>    
          )
          }

      </>
  )
}

export default CopyBtn