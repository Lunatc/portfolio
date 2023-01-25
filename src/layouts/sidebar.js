import classes from './styles/sidebar.module.css';
import foto from '../assets/images/foto.jpg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Link } from 'react-router-dom';

function Sidebar() {
    return(
        <div className={classes.Sidebar}>
                <img src={foto} alt="Foto da Cintia"></img>
                <h1>Quem sou eu</h1>
                <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>
                <a className={classes.curriculo} href="https://drive.google.com/file/d/14rvCWLhOxG_0czzwcFv7fVioEHtRPcnu/view?usp=sharing">Meu curriculo em PDF</a>
                
                 {/*<ul className={classes.redes}>
                    <li>
                        <Link to='https://github.com/Lunatc' size='2x'>
                            <FontAwesomeIcon icon="fa-brands fa-github-alt" />                            <i class="fa-brands fa-github-alt"></i>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.behance.net/cintiaBM">
                            <FontAwesomeIcon icon="fa-brands fa-behance" />
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/CintiaBM">
                            <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cintia-braz/">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </a>
                    </li>
                </ul>*/}
                
                <h2>Contato:</h2>
                <p className={classes.email}>cbrmesquita@gmail.com</p>  
        </div>
    );
}

export default Sidebar;