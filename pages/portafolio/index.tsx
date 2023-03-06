import Head from 'next/head'
import Link from 'next/link'
import {HeaderOne,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 
import LinkNav from '../../components/portfolio/LinkNav'
import IconLogo from '../../components/Icons/IconLogo'
import SubNav from '../../components/SubNav'
import IconHomePort from '../../components/Icons/IconHomePort'
import LinkNavPortfolio from '../../components/LinkNavPortfolio'
import IconProject from '../../components/Icons/IconProject'
import IconSkill from '../../components/Icons/IconSkill'
import IconArrowBack from '../../components/Icons/IconArrowBack'
import IconDownload from '../../components/Icons/IconDownload'
import { useContext } from 'react'
import {SiteContextVal} from '../../context/SiteContext'
import SobreMi from '../../components/portfolio/SobreMi'
import { useRouter } from 'next/router'
import AllMobile from '../../components/portfolio/AllMobile'
export default function Home() {
const {openMenuDesktop,setOpenMenuDesktop}=useContext(SiteContextVal)
const[openMenu,setOpenMenu]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
const router=useRouter()
  return (

    <div>
      <Head>
        <title>Mi portafolio</title>
        <meta name="description" content="Dengel Rivera dev - Mi portafolio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      <div className='md:flex md:flex-row'>
     
      <header >
      <HeaderOne 
navMobileContent={ <NavMobileTypeTwo 
colorSubNav='bg-sky-600'
 linksSubNav={
<SubNav />} 
openSubNav={openSubNav} 
setOpenSubNav={setOpenSubNav} 
colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} 
openMenu={openMenu}>

<LinkNav Icon={<IconHomePort/>} href="#" text="Sobre mi"/>
<LinkNav Icon={<IconProject/>} href="#" text="Mis proyectos"/>
<LinkNav Icon={<IconSkill/>} href="#" text="Mis habilidades"/>

</NavMobileTypeTwo>}
posicion="lg:justify-center"
logo={<article className='flex flex-row items-center gap-[20px]'><IconArrowBack BackClick={()=>router.push('/')}/><Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link> </article>} 
LinksNavDesktop={<section className='flex flex-col gap-[26px]'>
 
    <LinkNavPortfolio Icon={<IconHomePort/>} href="#" text="Sobre mi"/>
    <LinkNavPortfolio Icon={<IconProject/>} href="#" text="Mis proyectos"/>
   <LinkNavPortfolio Icon={<IconSkill/>} href="#" text="Mis habilidades"/>
   <LinkNavPortfolio Icon={<IconDownload/>} href="#" text="Descarga mi cv"/>
    
</section>} 
colorHeader='bg-primary' 
openMenuDesktop={openMenuDesktop}
  openMenu={openMenu} 
  navDesktopLittle={<NavDesktopTypeTwo 
  colorNavLittleDesktop={"bg-sky-500"}
   openMenuDesktop={openMenuDesktop}>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
<h2 className='text-white'>contactos</h2>
<h2 className='text-white'>profile</h2>
</NavDesktopTypeTwo>} 
setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/> 
  </header>
  </div>
      <main className='bg-gradient-to-t w-full h-[100vh] from-secundary2 via-secundary3 to-secundary3 ' >
      <AllMobile/>
        <SobreMi/>

      </main>
      </div>
      
 
  )
}
