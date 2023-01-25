import classes from './styles/sidebar.module.css';
import foto from '../assets/images/foto.jpg';

function Sidebar() {
    return(
        <div className={classes.Sidebar}>
                <img src={foto} alt="Foto da Cintia"></img>
                <h1>Quem sou eu</h1>
                <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>
                <a className={classes.curriculo} href="https://drive.google.com/file/d/14rvCWLhOxG_0czzwcFv7fVioEHtRPcnu/view?usp=sharing">Meu curriculo em PDF</a>
                
                {/*<ul className={classes.redes}>
                    <li><a href="https://github.com/Lunatc"><i class="fa-brands fa-github-alt"></i></a></li>
                    <li><a href="https://www.behance.net/cintiaBM"><i class="fa-brands fa-behance"></i></a></li>
                    <li><a href="https://dribbble.com/CintiaBM"><i class="fa-brands fa-dribbble"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/cintia-braz/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>*/}
                
                <h2>Contato:</h2>
                <p class="email">cbrmesquita@gmail.com</p>  
        </div>
    );
}

export default Sidebar;