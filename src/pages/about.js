import classes from './styles/about.module.css';


function About() {
    return (
        <div className={classes.About}>
            
            <h1>Breve introdução</h1>
            <br></br>
            <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>
            <br></br>
            <p className={classes["small-text"]}>Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer.</p>        
            <br></br>
            <p className={classes["small-text"]}>Meus interesses</p>
            <br></br>
            
            <h1>Educação</h1>
            <hr/>
            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Intercâmbio universitário</h3>
                    <p className={classes["small-text"]}>KNU - Kyungpook National University - Daegu, South Korea</p>
                </div>
                <div className={classes.date}>
                   <p>2018 - Present</p>
                </div>
            </div>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Graduação</h3>
                    <p className={classes["small-text"]}>UNESP - Universidade Estadual Paulista “Júlio de Mesquita Filho”</p>
                </div>
                <div className={classes.date}>
                   <p>2022</p>
                </div>
            </div>

            <br></br>
            <h1>Experiências</h1>
            <hr/>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Desenvolvedora FrontEnd</h3>
                    <p className={classes["small-text"]}>ECCjr - Empresa Júnior da Ciência da Computação</p>
                </div>
                <div className={classes.date}>
                   <p>2019 - 2022</p>
                </div>
            </div>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Iniciação Científica</h3>
                    <p className={classes["small-text"]}>Projeto Scimov</p>
                </div>
                <div className={classes.date}>
                   <p>2020 - 2021</p>
                </div>
            </div>

            <br></br>
            <h1>Posters e Workshops</h1>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>AUIN 15 anos</h3>
                    <p className={classes["small-text"]}>Plataforma de mediação de conteúdo científico em formato audiovisual </p>
                </div>
                <div className={classes.date}>
                   <p>2022</p>
                </div>
            </div>
        </div>
    );
}

export default About;