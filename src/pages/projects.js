import classes from './styles/projects.module.css'
//import Card from '../components/card.js'
//import projeto1 from "../assets/images/projeto1.png"
import foto from '../assets/images/foto2.jpg';

function Projects() {
    return (
       <div className={classes.Projects}>
        
        <h1>Projects</h1>

        <p>In development</p>
        <div className={classes.foto}>
          <img src={foto} alt="Foto da Cintia"></img>
        </div>
        

        {/*<Card 
          title="teste" 
          text="Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer."
          image={projeto1}
        />
        <Card 
          title="teste2"
          text="Estudante de Ciência da Computação, me especializando em UI/UX. Pretendo fazer um mestrado na área de IHC e trabalhar como UX Researcher ou Product Designer."
          image={projeto1}
    />*/}
        
        </div>
    );
  }
  
export default Projects;