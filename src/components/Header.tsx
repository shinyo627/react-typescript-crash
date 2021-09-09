import {useLocation} from 'react-router-dom'

import Button from './Button'

interface HeaderProps {
  title?: string;
  onAdd():void
  showAddTask: boolean
}

const Header: React.FC<HeaderProps> = ({title='default hello', showAddTask, onAdd}) => {
const location =useLocation()

  return (
    <header className='flex justify-between items-center mb-20px bg-pink-300'>
      <h1 className='text-lg font-architect'>{title}</h1>

      { location.pathname === '/' && (
        <Button 
        color={showAddTask ? 'pink' : 'steelblue'} 
        text={showAddTask? 'Close' : 'Add'} 
        clickHandler={onAdd}/>
      )}
    </header>
  )
}


export default Header

