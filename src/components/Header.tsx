import React from 'react'
import Button from './Button'

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({title='default hello'}) => {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('click')
  }

  return (
    <header className='flex justify-between items-center mb-20px bg-pink-300'>
      <h1 className='text-lg font-architect'>{title}</h1>
      <Button text='Click me to add yo' clickHandler={clickHandler}/>
    </header>
  )
}


export default Header

