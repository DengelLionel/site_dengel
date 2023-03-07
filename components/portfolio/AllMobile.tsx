import Image from "next/image"
import OnduladoOne from "./OnduladoOne"
import IconDownload from "../Icons/IconDownload"
import IconInstagram from "../Icons/IconInstagram"
import ButtonContactRedSocial from "./ButtonContactRedSocial"
import IconGithub from "../Icons/IconGithub"
import IconLinkedin from "../Icons/IconLinkedin"
import Titulos from "./Titulos"
const AllMobile = () => {
  return (
    <div className='flex flex-col gap-0 md:hidden'>
        <section className="flex flex-col items-center bg-primary w-full">
        <Image className="mt-[39px] mb-[11px] rounded-br-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-tl-[15px]" width={111} height={149} src="https://res.cloudinary.com/darps1cta/image/upload/v1677882692/sitioweb/optimizado_bxuu0i.png" alt="imagen de perfil"/>
        <h2 className="font-rowdies text-[24px] not-italic text-textPrimary leading-[30px] font-normal tracking-[0.015em] mb-[15px]">Dengel Rivera</h2>
        <h3 className="font-rowdies text-[16px] not-italic text-yellow1 leading-[30px] font-light tracking-[0.015em]">Desarrollador frontend</h3>
        <h3 className="font-rowdies text-[16px] not-italic text-textPrimary leading-[30px] font-light tracking-[0.015em] mb-[26px]">Freelancer</h3>
        <button className="font-roboto font-extrabold not-italic text-[16px] leading-[19px] tracking-[0.015em] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] mb-[26px] w-[324px] pt-[10px] pb-[11px] bg-textPrimary">Mira mi brochure</button>

        
          <article className="flex flex-col gap-[22px]">
          <ButtonContactRedSocial 
        Icon={<IconDownload fill="#ABA7C0"/>} 
        Text="Descarga mi CV" 
        href=""
        download={true}/>

        <ButtonContactRedSocial 
        Icon={<IconInstagram fill="#ABA7C0"/>} 
        Text="Instagram" 
        href=""
        download={false}
        />

<ButtonContactRedSocial 
        Icon={<IconGithub fill="#ABA7C0"/>} 
        Text="Github" 
        href=""
        download={false}
        />

<ButtonContactRedSocial 
        Icon={<IconLinkedin fill="#ABA7C0"/>} 
        Text="Linkendlin" 
        href=""
        download={false}
        />
          </article>
       
   
        </section>
        <OnduladoOne/>

        <article>
      <p className="font-medium font-roboto italic text-[20px] leading-[23px] tracking-[0.015em] text-center text-textPrimary3">“Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día”</p>
    </article>

      <article>
      <Titulos titulo="PROJECTOS Y EXPERIENCIAS"/>
     
      </article>
    </div>
  )
}

export default AllMobile