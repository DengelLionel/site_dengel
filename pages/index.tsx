import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {HeaderTwo,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 
import NavDesktop from '../components/NavDesktop'
import LinkNav from '../components/LinkNav'
import IconHome from '../components/Icons/IconHome'
import IconJob from '../components/Icons/IconJob'
import IconBlog from '../components/Icons/IconBlog'
import IconBrochure from '../components/Icons/IconBrochure'
import IconPlantilla from '../components/Icons/IconPlantilla'
import IconModule from '../components/Icons/IconModule'
import LinkNavLittleDesktop from "../components/LinkNavLittleDesktop"
import SitiosWeb from '../components/SitiosWeb'
import SitioWeb1024mas from '../components/SitioWeb1024mas'
import MisServicios from '../components/MisServicios'
import LoQueYoOfrezco from '../components/LoQueYoOfrezco'
import Preguntas from '../components/Preguntas'
/* import HechaVistasoProyectos from '../components/HechaVistasoProyectos' */
import PlantillasWeb from '../components/PlantillasWeb'
import Formulario from '../components/Formulario'
import FooterContent from '../components/FooterContent'
import IconLogo from '../components/Icons/IconLogo'
import SubNav from '../components/SubNav'

export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
const [openSubNav,setOpenSubNav]=useState(false)
  return (

    <div>
      <Head>
        <title>Mi punto de partida</title>
        <meta name="description" content="Dengel Rivera dev - Mi punto de partida " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logodev.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      <header className={styles.header}>
      <HeaderTwo navMobileContent={<NavMobileTypeTwo  openSubNav={openSubNav} setOpenSubNav={setOpenSubNav} colorSubNav='bg-sky-600' 
linksSubNav={<SubNav />} colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} openMenu={openMenu}>
    <LinkNav Icon={ <IconHome/>} text={" Mi punto de partida"} hreff={"#"}/>
        <LinkNav Icon={ <IconModule/>} text={" Mis servicios integrales"} OnClick={()=>setOpenSubNav(true)}/>
        <LinkNav Icon={ <IconJob/>} text={" Mi repositorio de proyectos"} hreff={"#"}/>
        <LinkNav Icon={ <IconBrochure/>} text={"Mi brochure"} hreff={"#"}/>
        <LinkNav Icon={ <IconBlog/>} text={"Mi brog"} hreff={"#"}/>
        <LinkNav Icon={ <IconPlantilla/>} text={"Mis plantillas web premium"} hreff={"#"}/>
    </NavMobileTypeTwo>} 
      logo={<Link href='/' aria-label="te envia home (mi punto de partida)"><IconLogo/></Link>} LinksNavDesktop={<NavDesktop/>} colorHeader='bg-primary ' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} 
      
      navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur"} openMenuDesktop={openMenuDesktop}>
      <LinkNavLittleDesktop href="#" Icon={<IconBrochure/>} text="Mi brochure"/>
      <LinkNavLittleDesktop href="#" Icon={<IconBlog/>} text="Mi blog"/>
      <LinkNavLittleDesktop href="#" Icon={<IconPlantilla/>} text="Mis plantillas web premium"/>
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
  </header>
      <main className='bg-gradient-to-t w-full h-full from-secundary2 via-secundary3 to-secundary3 pb-[40px] ' >
      
     <section className={styles.fondo}>
     <section className='lg:w-full lg:flex lg:flex-row 2xl:justify-center 2xl:items-center'>
      <section>
     <h2 className={styles.textPresent}>Creo apps efectivas con diseño y codificación de calidad</h2>
   
     <article className={styles.seccion}>
      <p className=' lg:w-[560px]'>Maximiza tus resultados conmigo.</p>
     </article>
     <article className='flex justify-center items-center p-[16px] mt-[21px] mb-[21px] lg:ml-[20px] xl:ml-[32px] xl:mt-0 '>
     <button className={styles.button}>Conoce más</button>
     </article>
     </section>
     <article className='hidden lg:flex lg:relative lg:-left-[150px] xl:-left-0'>
     <SitioWeb1024mas/>
     </article>
     </section>
     <article className='pl-[16px] pr-[16px] pb-[50px] sm:flex sm:justify-center  md:pb-[80px] lg:hidden'>
     <SitiosWeb/>
     </article>
     </section>

     <MisServicios/>
     <LoQueYoOfrezco/>
     
  {/* <HechaVistasoProyectos/> */}
     <PlantillasWeb/>
     <Preguntas/>
     <Formulario/>
     
      </main>
      <footer className='bg-azul2 w-full h-auto p-[16px]'>
      <FooterContent/>
      </footer>
    </div>
  )
}
