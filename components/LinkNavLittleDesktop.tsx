import styles from "../styles/Home.module.css"
import Link from 'next/link'
import {Roboto} from '@next/font/google'
const robotoo = Roboto({
  style:["normal"],
  weight:["400","700"],
  subsets:["latin"],
  variable:"--font-roboto",
  
})
interface linkNav{
  text:string,
  href:string,
  Icon?:any
}
const LinkNavLittleDesktop = ({text,href,Icon}:linkNav) => {
  return (
  
      <Link className={styles.linkNavLittleDesktop} href={href}>{Icon}{text}</Link>
  
    
  )
}

export default LinkNavLittleDesktop