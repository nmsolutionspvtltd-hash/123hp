import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <Image src="/images/hp-error.jpg" alt="Error Page" width={800} height={600} className="mx-auto my-10 w-3/5"/>
  )
}

export default page