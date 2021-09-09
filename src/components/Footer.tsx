
interface FooterProps {
  description?: string
}

const Footer: React.FC<FooterProps> = ({description}) => {
  return (
    <footer>
      <h4>Copyright &copy; 2021</h4>
      { description && 
      <p>{description}</p> }
      <a href="/about">About</a>
    </footer>
  )
}

export default Footer
