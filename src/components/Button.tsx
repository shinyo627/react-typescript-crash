interface ButtonProps {
  color?: string;
  text: string;
  clickHandler(e: React.MouseEvent<HTMLButtonElement>):void ;
}

const Button:React.FC<ButtonProps> = ({color, text, clickHandler}) => {


  return (
    <button 
    onClick={clickHandler}
    className='inline-block text-whit py-10px px-20px m-5px rounded-md'
    style={{ backgroundColor: color}}>
      {text}
    </button>
  )
}

export default Button
