import Link from 'next/link'
import styles from '../styles/LinkNav.module.css'
import { NavDesktopTypeTwo } from 'componentes-dengel'
import LinkNavLittleDesktop from './LinkNavLittleDesktop'
import {Roboto} from '@next/font/google'
const robotoo = Roboto({
  style:["normal"],
  weight:["400","700"],
  subsets:["latin"],
  variable:"--font-roboto"
})
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
    <article className={robotoo.variable}>
    <Link className={styles.link} href={hreff}>
    {Icon}
    {text}</Link>
    </article>
  ):(
    <section className={robotoo.variable}>
    <section className='flex flex-col '>
      
      <p onClick={OnClick} className={styles.link}>
      {Icon}
    {text}</p>
      
      <NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur top-[90px]"} openMenuDesktop={open}>
        {links?.map((link:any,index:number)=>(
       <LinkNavLittleDesktop key={index} href={link.href}  text={link.link}/>
        ))}
      
  </NavDesktopTypeTwo>
    </section>
    </section>
    
  )
}

export default LinkNav