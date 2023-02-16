import styles from "../styles/Home.module.css"
import Link from 'next/link'
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