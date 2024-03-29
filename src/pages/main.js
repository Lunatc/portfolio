import classes from './styles/main.module.css';
import foto from '../assets/images/foto.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Main() {
    return (
        <div className={classes.Main}>
            <div className={classes.hero}>
                <div className={classes.foto}>
                    <img src={foto} alt="Foto da Cintia"></img>
                </div>
                <div className={classes.texto}>
                    <div className={classes.intro}>
                        <h1>Hi, my name is Cintia</h1>
                        <br></br>
                        <p>I just finished my computer science undergraduate degree at Unesp, Brazil.</p>
                        <br></br>
                        <Link to='/about'>More about me...</Link>
                    </div>
                    <div className={classes.findMe}>
                        <h1>You can find me:</h1>
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
                                {/* <li>
                                    <a href="https://www.behance.net/cintiaBM">
                                        <FontAwesomeIcon icon="fa-brands fa-behance" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dribbble.com/CintiaBM">
                                        <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    );  
}

export default Main;
