import React from 'react'
interface iconArrow{
    setOpen:any
}
const IconArrowDown = ({setOpen}:iconArrow,props:any) => {
  return (
    <svg
    onClick={setOpen}
    width={24}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.82 0 12 9.553 21.18 0 24 2.941 12 15.456 0 2.941 2.82 0Z"
      fill="#E6E6E6"
    />
  </svg>
  )
}

export default IconArrowDown