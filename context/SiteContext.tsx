import React from 'react'
import { createContext,useState } from 'react'
interface context{
    openMenuDesktop:boolean|undefined,
    setOpenMenuDesktop:(data:boolean|undefined)=>void
}
export const SiteContextVal=createContext<context>({
openMenuDesktop:false,
setOpenMenuDesktop:()=>{}
})
const SiteContext = ({children}:any) => {
    const[openMenuDesktop,setOpenMenuDesktop]=useState<boolean|undefined>(false)
 const data={
    openMenuDesktop,setOpenMenuDesktop
 }
    return (
   <SiteContextVal.Provider value={data}>{children}</SiteContextVal.Provider>
  )
}

export default SiteContext