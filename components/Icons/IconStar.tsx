import React from 'react'

const IconStar = (props:any) => {
  return (
    <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#16064A" fillOpacity={0.81} />
    <path
      d="m14.605 5.765-3.173 5.689-7.1.915c-1.274.163-1.784 1.55-.86 2.346l5.136 4.425-1.215 6.251c-.218 1.13 1.128 1.976 2.255 1.448L16 23.887l6.352 2.952c1.127.524 2.473-.318 2.255-1.448l-1.215-6.251 5.137-4.425c.923-.795.413-2.183-.86-2.346l-7.1-.915-3.174-5.689c-.569-1.014-2.216-1.027-2.79 0Z"
      fill="#E6E6E6"
    />
  </svg>
  )
}

export default IconStar