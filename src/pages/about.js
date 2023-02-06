import classes from './styles/about.module.css';


function About() {
    return (
        <div className={classes.About}>
            
            <h1>Breve introdução</h1>
            <br></br>
            <p className={classes["small-text"]}>Olá, meu nome é Cíntia Braz, eu tenho 21 anos e estou formando em Bacharelado em Ciência da Computação pela Unesp, campus São José do Rio Preto. Estou me especializando em UI/UX design, pois foi a área que se encaixa muito bem comigo e que mais me interessa.</p>
            <br></br>
            <p className={classes["small-text"]}>Durante minha graduação eu sempre busquei participar nas diversas atividades, eventos e cursos que a universidade me deu a oportunidade de participar. Inclusive, em 2022 tive a chance de fazer um intercâmbio acadêmico pela minha universidade para a KNU na Coréia do Sul. Foi uma ótima experiência que me trouxe muito crescimento pessoal e maior confiança para usar meu inglês.</p>        
            <br></br>
            <p className={classes["small-text"]}>No tempo livre eu gosto de descansar, desenhar, ler, viajar e buscar novos hobbies temporários.</p>
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
                    <h3>Bacharelado em Ciência da Computação</h3>
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
            <hr/>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Apresentação de poster no evento AUIN 15 anos</h3>
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