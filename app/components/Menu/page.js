import React from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <>
      <nav className='w-full flex flex-row items-center justify-center bg-white flex-wrap p-6'>
        <div className='w-4/5 flex items-center flex-shrink-0 text-white mr-6'>
          <Link href={"/"} className='flex flex-row'>
            <Image
              src='./shrivel-logo.svg'
              className='h-8 w-8 mr-2'
              width={54}
              height={54}
              alt={"Shrivel Logo"}
            />
            <span className='font-extrabold text-3xl text-teal-500 tracking-tighter'>
              Shrivel
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
