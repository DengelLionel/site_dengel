import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {HeaderTwo,NavDesktopTypeTwo,NavMobileTypeTwo} from "componentes-dengel" 
import { useState } from 'react'
import "componentes-dengel/dist/style.css" 

export default function Home() {

const[openMenu,setOpenMenu]=useState(false)
const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTwo logo={<Link href='/'><Image width={30} height={30} alt='image'  src={'next.svg'}/></Link>} LinksNavDesktop={<section><h2>mundial</h2></section>} colorHeader='bg-blue-800' openMenuDesktop={openMenuDesktop}  openMenu={openMenu} navDesktopLittle={<NavDesktopTypeTwo openMenuDesktop={openMenuDesktop}>
      <Link className='text-white' href={"#"}>Contactos</Link>
          <Link className='text-white' href={"#"}>Contactos</Link>
  </NavDesktopTypeTwo>} setOpenMenu={()=>{setOpenMenu(!openMenu)}} setOpenMenuDesktop={()=>{setOpenMenuDesktop(!openMenuDesktop)}}>
    
    <NavMobileTypeTwo openMenu={openMenu}>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
      <h2 className='text-white'>contactos</h2>
      <h2 className='text-white'>profile</h2>
    </NavMobileTypeTwo>

    
    </HeaderTwo>
    
      <main className=''>
     <h2>hola</h2>
     
      </main>
    </div>
  )
}
