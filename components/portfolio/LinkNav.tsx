import Link from "next/link"
interface link{
    Icon?:any,
    text:string,
    href:any
  }
const LinkNav = ({Icon,text,href}:link) => {
  return (
    <Link className="text-white2 flex items-center w-auto gap-[20px]" href={href}>
      {Icon}
      {text}
    </Link>
  )
}

export default LinkNav