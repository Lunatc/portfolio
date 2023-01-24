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
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/curriculo">Currículo</Link>
                    </li>
                    <li>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                </ul>
               
            </nav>
        </header>
    );
  }
  
export default Header;