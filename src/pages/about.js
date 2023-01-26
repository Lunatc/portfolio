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
            <br></br>
            <h3>Intercâmbio universitário</h3>
            <p>KNU - Kyungpook National University - Daegu, South Korea
            <br/> Início: 03/2022 - Término: 06/2022</p>

            <br></br>
            <h3>Graduação</h3>
            <p>UNESP - Universidade Estadual Paulista “Júlio de Mesquita Filho” 
            <br/> Início: 02/2018 Previsão de formatura: 12/2023 
            </p>

            <br></br>  
            <h1>Experiências</h1>
            <hr/>
            <br></br>
            <h3>Desenvolvedora FrontEnd</h3>
            <p>ECCjr - Empresa Júnior da Ciência da Computação</p>
            <p>Início: 06/2019 - Término: 01/2022</p>
            <br></br>
            <p className={classes["small-text"]}>Experiência como desenvolvedora web front-end com foco em UI/UX. Aprendi o principal sobre desenvolvimento web front-end, incluindo a framework Gatsby. Trabalhei fazendo protótipos na ferramenta Figma e desenvolvendo Landing Pages.</p>
            <br></br>

            <h3>Iniciação Científica</h3>
            <p>Projeto Scimov</p>
            <p>Início: 11/2020 - Término: 01/2022</p>
            <br></br>
            <p className={classes["small-text"]}>Estive pesquisando sobre heurísticas de usabilidade para plataformas web com conteúdo audiovisual científico, buscando entender o que é necessário para desenvolver uma interface de qualidade e com boa experiência de usuário.</p>
            <br></br>

            <h1>Posters e Workshops</h1>
            <hr/>
            <br></br>
            <h3>AUIN 15 anos</h3>
            <p>Plataforma ...</p>
            <p>Data:</p>
            <br></br>
            <p className={classes["small-text"]}>Experiência como desenvolvedora web front-end com foco em UI/UX. Aprendi o principal sobre desenvolvimento web front-end, incluindo a framework Gatsby. Trabalhei fazendo protótipos na ferramenta Figma e desenvolvendo Landing Pages.</p>
        </div>
    );
}

export default About;