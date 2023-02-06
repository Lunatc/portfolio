import { Link } from 'react-router-dom';
import classes from './styles/header.module.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <Link to="/">Cíntia Braz</Link>  
            </h1>
            <nav>
                <ul>
                     <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1eV7VNIeM_fHTXKYMquw9mjnpPrTr5S94/view?usp=share_link">CV</a>
                    </li>
                    {/*<li>
                        <a href="/" className={classes.icon}>
                            <FontAwesomeIcon icon="moon" />
                        </a>          
                    </li>*/}         
                </ul>              
            </nav>
        </header>
        
    );
  }
  
export default Header;