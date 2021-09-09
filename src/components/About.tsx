import {Link} from 'react-router-dom'

interface Props {
  
}

const About = (props: Props) => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
