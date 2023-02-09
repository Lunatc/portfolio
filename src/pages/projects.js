import classes from './styles/projects.module.css'
import Card from '../components/card.js'
//import projeto1 from "../assets/images/projeto1.png"

function Projects() {
    return (
       <div className={classes.Projects}>
        
        <h1>Projects</h1>    

        <Card 
          title="Github Profile Data Fetch Website" 
          text="Simple website to get data of github users. Through this project, I was able to learn more about react and APIs."
          //image={projeto1}
          link="https://lunatc.github.io/git-api/"
          date="2021"
        />
        
        </div>
    );
  }
  
export default Projects;