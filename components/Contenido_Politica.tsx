import React from 'react'
import { useEffect,useState } from 'react'
import ReactMarkdown  from 'react-markdown'
const Contenido_Politica = ({markdown}:any) => {
    const [contenido,setContenido]=useState<any>("")
    useEffect(()=>{
        fetch(`/contenido/${markdown}`)
        .then(response=>(response.text()))
        .then(data=>setContenido(data))
    },[])
  return (
    <div>  <ReactMarkdown children={contenido}/></div>
  )
}

export default Contenido_Politica