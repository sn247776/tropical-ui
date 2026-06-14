import Link from 'next/link'
import React, { ReactNode } from 'react'


interface AboutCardProps {
  icon: any
  title: string
  desc: string
  href: string
}

function AboutCard({ icon: Icon, title, desc, href }: AboutCardProps) {
  return (
    <div className="text-center shadow-md py-default px-middel rounded-md border flex flex-col gap-items items-center">
      <div className="text-primary">
        <Icon size={50} />
      </div>
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-muted-foreground leading-loose">{desc}</p>
      <Link href={href} className="text-primary hover:underline">
        KNOW MORE
      </Link>
    </div>
  )
}

export default AboutCard