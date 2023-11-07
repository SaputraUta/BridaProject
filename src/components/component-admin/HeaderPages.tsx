import React from 'react'

type Header ={
    title: string
}

const HeaderPages = ({title}:Header) => {
  return (
    <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
  )
}

export default HeaderPages