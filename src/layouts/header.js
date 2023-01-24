import { Link } from 'react-router-dom';
import classes from './styles/header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <h1>
                <Link to="/Portfolio">Cíntia's Portfolio</Link>  
            </h1>

            <nav>
                <ul>
                     <li>
                        <Link to="/Portfolio/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio/curriculo">Currículo</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio/projetos">Projetos</Link>
                    </li>
                </ul>
               
            </nav>
        </header>
    );
  }
  
export default Header;