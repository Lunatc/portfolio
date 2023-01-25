import classes from './styles/about.module.css';


function About() {
    return (
        <div className={classes.About}>
                <h1>Breve introdução</h1>
                <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>
        </div>
    );
}

export default About;