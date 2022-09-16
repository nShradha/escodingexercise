import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './styles.css';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/" className="site-title">
        Coding Exercise
      </Link>
      <ul>
        <CustomLink to="/">Coding Exercise 01</CustomLink>
        <CustomLink to="/dogs">Coding Exercise 02</CustomLink>
      </ul>
    </nav>    
  );
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}