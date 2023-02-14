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
import HechaVistasoProyectos from '../components/HechaVistasoProyectos'
import PlantillasWeb from '../components/PlantillasWeb'
import Formulario from '../components/Formulario'
import FooterContent from '../components/FooterContent'
export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
  return (

    <div>
      <Head>
        <title>Mi punto de partida</title>
        <meta name="description" content="Dengel Rivera dev - Mi punto de partida " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>


      </Head>
      <header className={styles.header}>
      <HeaderTwo navMobileContent={<NavMobileTypeTwo colorNavMobile={"bg-whiteTransparent3 backdrop-blur"} openMenu={openMenu}>
    <LinkNav Icon={ <IconHome/>} text={" Mi punto de partida"} href={"#"}/>
        <LinkNav Icon={ <IconModule/>} text={" Mis servicios integrales"} href={"#"}/>
        <LinkNav Icon={ <IconJob/>} text={" Mi repositorio de proyectos"} href={"#"}/>
        <LinkNav Icon={ <IconBrochure/>} text={"Mi brochure"} href={"#"}/>
        <LinkNav Icon={ <IconBlog/>} text={"Mi brog"} href={"#"}/>
        <LinkNav Icon={ <IconPlantilla/>} text={"Mis plantillas web premium"} href={"#"}/>
    </NavMobileTypeTwo>} 
      posicion="lg:justify-center" logo={<Link href='/'><Image width={30} height={30} alt='image'  src={'next.svg'}/></Link>} LinksNavDesktop={<NavDesktop/>} colorHeader='bg-gradient-to-t from-primary via-secundary to-secundary ' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} 
      
      navDesktopLittle={<NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur"} openMenuDesktop={openMenuDesktop}>
      <LinkNavLittleDesktop href="#" Icon={<IconBrochure/>} text="Mi brochure"/>
      <LinkNavLittleDesktop href="#" Icon={<IconBlog/>} text="Mi blog"/>
      <LinkNavLittleDesktop href="#" Icon={<IconPlantilla/>} text="Mis plantillas web premium"/>
  </NavDesktopTypeTwo>} 
  setOpenMenu={()=>{setOpenMenu(!openMenu)}} 
  setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}/>
  </header>
    
    

    
    
    
      <main className='bg-gradient-to-t from-secundary2 via-secundary3 to-secundary3 ' >
   
     <section className={styles.fondo}>
     <h2 className={styles.textPresent}>Creo apps efectivas con diseño y codificación de calidad</h2>
   
     <article className={styles.seccion}>
      <p className=' lg:w-[560px]'>Maximiza tus resultados conmigo.</p>
     </article>
   
     <article className='hidden lg:flex lg:absolute lg:left-[410px]  lg:top-[170px] xl:absolute xl:left-[630px] xl:top-[210px]'>
     <SitioWeb1024mas/>
     </article>

     <article className='p-[16px] mt-[21px] mb-[21px] lg:ml-[20px] xl:ml-[32px] xl:mt-0 xl:relative xl:-top-[5%]'>
     <button className={styles.button}>Conoce más</button>
     </article>

     <article className='pl-[16px] pr-[16px] pb-[50px] sm:flex sm:justify-center  md:pb-[80px] lg:hidden'>
     <SitiosWeb/>
     </article>
  
     </section>

     <MisServicios/>
     <LoQueYoOfrezco/>
     
     <HechaVistasoProyectos/>
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
