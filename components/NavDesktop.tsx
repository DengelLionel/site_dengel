import IconModule from './Icons/IconModule'
import IconJob from './Icons/IconJob'
import IconHome from './Icons/IconHome'
import LinkNav from './LinkNav'
const NavDesktop = () => {
  return (
    <section className=' flex flex-row lg:gap-[20px] items-center xl:gap-[82px]'>
        <LinkNav Icon={ <IconHome/>} text={" Mi punto de partida"} href={"#"}/>
        <LinkNav Icon={ <IconModule/>} text={" Mis servicios integrales"} href={"#"}/>
        <LinkNav Icon={ <IconJob/>} text={" Mi repositorio de proyectos"} href={"#"}/>
    </section>
  )
}

export default NavDesktop