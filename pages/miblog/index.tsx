import Head from 'next/head'
import Link from 'next/link'
import MiBlogBody from '../../components/miblog'
import {HeaderTwo,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 
import NavDesktop from '../../components/NavDesktop'
import LinkNav from '../../components/LinkNav'
import IconHome from '../../components/Icons/IconHome'
import IconJob from '../../components/Icons/IconJob'
import IconBlog from '../../components/Icons/IconBlog'
import IconBrochure from '../../components/Icons/IconBrochure'
import IconPlantilla from '../../components/Icons/IconPlantilla'
import IconModule from '../../components/Icons/IconModule'
import LinkNavLittleDesktop from "../../components/LinkNavLittleDesktop"
import FooterContent from '../../components/FooterContent'
import IconLogo from '../../components/Icons/IconLogo'
import SubNav from '../../components/SubNav'



export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
  return (

    <div>
      <Head>
        <title>Mi blog - Dengel Rivera dev</title>
        <meta name="description" content="Dengel Rivera dev - Página web personalizada " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      
      <header className="font-roboto tracking-[0.015em]">
      <HeaderTwo navMobileContent={<NavMobileTypeTwo 
       openSubNav={openSubNav} 
       setOpenSubNav={setOpenSubNav} 
       colorSubNav='bg-sky-600' 
linksSubNav={<SubNav />} 
colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} openMenu={openMenu}>
    <LinkNav Icon={ <IconHome/>} text={" Mi punto de partida"} hreff={"/"}/>
        <LinkNav Icon={ <IconModule/>} text={" Mis servicios integrales"} OnClick={()=>setOpenSubNav(true)}/>
        <LinkNav Icon={ <IconJob/>} text={" Mi repositorio de proyectos"} hreff={"/portafolio"}/>
        <LinkNav Icon={ <IconBrochure/>} text={"Mi brochure"} hreff={"#"}/>
        <LinkNav Icon={ <IconBlog/>} text={"Mi brog"} hreff={"/miblog"}/>
        <LinkNav Icon={ <IconPlantilla/>} text={"Mis plantillas web premium"} hreff={"#"}/>
    </NavMobileTypeTwo>} 
      logo={<Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link>} LinksNavDesktop={<NavDesktop/>} colorHeader='bg-primary ' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} 
      
      navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur"} openMenuDesktop={openMenuDesktop}>
      <LinkNavLittleDesktop href="#" Icon={<IconBrochure/>} text="Mi brochure"/>
      <LinkNavLittleDesktop href="/miblog" Icon={<IconBlog/>} text="Mi blog"/>
      <LinkNavLittleDesktop href="#" Icon={<IconPlantilla/>} text="Mis plantillas web premium"/>
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
  </header>



      <main className='bg-gradient-to-t w-full h-full from-secundary2 via-secundary3 to-secundary3 pb-[40px] ' >
    
        <MiBlogBody/>
     
      </main>
      <footer className='bg-azul2 w-full h-auto p-[16px]'>
      <FooterContent/>
      </footer>
    </div>
  )
}
