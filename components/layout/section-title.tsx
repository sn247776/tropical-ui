import React from 'react'

interface SectionTitleProps {
  title?: string
  heading?: string
  desc?: string 
  align?: 'left' | 'center' | 'right',
  className?: string 
  isWhite?: boolean
}

function SectionTitle({ title, heading, desc, className, isWhite, align = 'center' }: SectionTitleProps) {
  const textColor = isWhite ? 'text-white' : '';
  const descColor = isWhite ? 'text-white' : 'text-muted-foreground';
  
  return (
    <div className={`flex flex-col gap-items ${className}${textColor} ${
      align === 'left' ? 'items-start text-left' : 
      align === 'right' ? 'items-end text-right' : 
      'items-center text-center'
    }`}>
      <h6 className={`text-lg uppercase font-bold ${isWhite ? 'text-white' : 'text-primary'}`}>
        {title}
      </h6>
      {heading && <h1 className={`text-2xl lg:text-4xl md:text-3xl font-semibold ${isWhite ? 'text-white' : 'text-primary'}`}>{heading}</h1>}
      
      {desc && <p className={`font-normal ${descColor}`}>{desc}</p>}
    </div>
  )
}

export default SectionTitle