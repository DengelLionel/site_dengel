import styles from "../styles/Home.module.css"
import Link from 'next/link'
const LinkNavLittleDesktop = ({text,href,Icon}:any) => {
  return (
    <Link className={styles.linkNavLittleDesktop} href={href}>{Icon}{text}</Link>
  )
}

export default LinkNavLittleDesktop