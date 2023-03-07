import React from 'react'
import { createContext,useState } from 'react'
interface context{
    openMenuDesktop:boolean|undefined,
    setOpenMenuDesktop:(data:boolean|undefined)=>void,
    openCardPortfolio:boolean|undefined,
    setOpenCardPortfolio:(data:boolean|undefined)=>void,
}
export const SiteContextVal=createContext<context>({
openMenuDesktop:false,
setOpenMenuDesktop:()=>{},
openCardPortfolio:false,
setOpenCardPortfolio:()=>{}
})
const SiteContext = ({children}:any) => {
    const[openMenuDesktop,setOpenMenuDesktop]=useState<boolean|undefined>(false)
    const[openCardPortfolio,setOpenCardPortfolio]=useState<boolean|undefined>(false)
 const data={
    openMenuDesktop,setOpenMenuDesktop,openCardPortfolio,setOpenCardPortfolio
 }
    return (
   <SiteContextVal.Provider value={data}>{children}</SiteContextVal.Provider>
  )
}

export default SiteContext