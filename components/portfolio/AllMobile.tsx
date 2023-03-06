import Image from "next/image"

const AllMobile = () => {
  return (
    <div className='flex md:hidden'>
        <section className="flex flex-col items-center bg-primary w-full">
        <Image className="mt-[39px] mb-[11px] rounded-br-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-tl-[15px]" width={111} height={149} src="https://res.cloudinary.com/darps1cta/image/upload/v1677882692/sitioweb/optimizado_bxuu0i.png" alt="imagen de perfil"/>
        </section>
        
    </div>
  )
}

export default AllMobile