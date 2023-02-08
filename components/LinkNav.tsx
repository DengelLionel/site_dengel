import React from 'react'
import Link from 'next/link'
const LinkNav = ({Icon,href,text}:any) => {
  return (
    <Link className={`transition-all font-semibold font-SegoeUI duration-300 delay-75 text-textHover lg:text-textPrimary  rounded-tr-xl rounded-tl-xl  rounded-bl-xl  rounded-br-xl border-[.2px] border-transparent border-solid pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[16px] lg:hover:text-textHover lg:hover:border-textPrimary lg:hover:bg-whiteTransparent2 lg:hover:shadow-shadow1 flex flex-row gap-[7px] items-center lg:text-center`} href={href}>
    {Icon}
    {text}</Link>
  )
}

export default LinkNav