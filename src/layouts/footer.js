import classes from './styles/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.contato}>
                <p>cbrmesquita@gmail.com</p>
                <div className={classes.redes}>
                    <ul>
                        <li>
                            <a href="https://github.com/Lunatc">
                                <FontAwesomeIcon icon="fa-brands fa-github-alt" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/cintia-braz/">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                            </a>
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
                    </ul>
                </div>
            </div>
                <p>Todos os direitos reservados - Cintia 2023</p>
        </footer>
    );
  }
  
export default Footer;