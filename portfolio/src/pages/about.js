import classes from './styles/about.module.css';


function About() {
    return (
        <div className={classes.About}>
            <div className={classes["about"]}>
                {/*<img src="img/foto.jpg" alt="Foto da Cintia">*/}
                <h1>Quem sou eu</h1>
                <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>
                <a className ={classes["curriculo"]} href="https://drive.google.com/file/d/14rvCWLhOxG_0czzwcFv7fVioEHtRPcnu/view?usp=sharing">Meu curriculo em PDF</a>
                
                {/*<ul className="redes">
                    <li><a href="https://github.com/Lunatc"><i className="fa-brands fa-github-alt"></i></a></li>
                    <li><a href="https://www.behance.net/cintiaBM"><i className="fa-brands fa-behance"></i></a></li>
                    <li><a href="https://dribbble.com/CintiaBM"><i className="fa-brands fa-dribbble"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/cintia-braz/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>*/}

                <h2>Contato:</h2>
                <p className={classes["email"]}>cbrmesquita@gmail.com</p>
            </div>
        </div>
    );
}

export default About;