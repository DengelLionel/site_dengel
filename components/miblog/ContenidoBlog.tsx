import React from 'react'
import { useEffect,useState } from 'react'
import ReactMarkdown  from 'react-markdown'
const ContenidoBlog = ({content}:any) => {
    const [contenido,setContenido]=useState<any>("")
    useEffect(()=>{
        fetch(`/contenido/${content&&content}`)
        .then(response=>(response.text()))
        .then(data=>setContenido(data))
    },[])
  return (
    <div>
        <ReactMarkdown>{contenido&&contenido}</ReactMarkdown>
    </div>
  )
}
export default ContenidoBlog