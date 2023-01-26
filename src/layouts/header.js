import { Link } from 'react-router-dom';
import classes from './styles/header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <Link to="/">Cíntia's Portfolio</Link>  
            </h1>

            <nav>
                <ul>
                     <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                </ul>              
            </nav>
        </header>
    );
  }
  
export default Header;