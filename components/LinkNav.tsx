import Link from 'next/link'
import { NavDesktopTypeTwo } from 'componentes-dengel'
import LinkNavLittleDesktop from './LinkNavLittleDesktop'
interface linkNav{
  Icon?:any,
  hreff?:string,
 
  text:string,
  OnClick?:any,
  open?:any,
  links?:any
}
const LinkNav = ({Icon,hreff,text,OnClick,open,links}:linkNav) => {
  return hreff!==undefined?(
    <Link className={`transition-all font-semibold font-SegoeUI duration-300 delay-75 text-textHover lg:text-textPrimary  rounded-tr-xl rounded-tl-xl  rounded-bl-xl  rounded-br-xl border-[.2px] border-transparent border-solid pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[16px] lg:hover:text-textHover lg:hover:border-textPrimary lg:hover:bg-whiteTransparent2 lg:hover:shadow-shadow1 grid grid-cols-[repeat(2,auto)] lg:flex lg:flex-row gap-[10px]  lg:items-center lg:text-center lg:gap-[7px]`} href={hreff}>
    {Icon}
    {text}</Link>
  ):(
    <section className='flex flex-col '>
      <p onClick={OnClick} className={`transition-all font-semibold font-SegoeUI duration-300 delay-75 text-textHover lg:text-textPrimary  rounded-tr-xl rounded-tl-xl  rounded-bl-xl  rounded-br-xl border-[.2px] border-transparent border-solid pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[16px] lg:hover:text-textHover lg:hover:border-textPrimary lg:hover:bg-whiteTransparent2 lg:hover:shadow-shadow1 flex flex-row gap-[7px] items-center lg:text-center`}>
      {Icon}
    {text}</p>
      
      <NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur top-[90px]"} openMenuDesktop={open}>
        {links?.map((link:any,index:number)=>(
       <LinkNavLittleDesktop key={index} href={link.href}  text={link.link}/>
        ))}
      
  </NavDesktopTypeTwo>
    </section>
    
  )
}

export default LinkNav