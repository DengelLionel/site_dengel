import Link from "next/link"
import { useContext } from "react"
import { SiteContextVal } from "../context/SiteContext"
interface link{
  Icon?:any,
  text:string,
  href:any
}
const LinkNavPortfolio = ({Icon,text,href}:link) => {
  const {openMenuDesktop}=useContext(SiteContextVal)
  return (
    
    <Link className="text-white2 flex items-center w-auto gap-[20px]" href={href}>
      {Icon}
      {openMenuDesktop===true&&text}
    </Link>
    
  )
}

export default LinkNavPortfolio