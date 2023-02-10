import classes from './styles/projects.module.css'
import Card from '../components/card.js'
//import projeto1 from "../assets/images/projeto1.png"

function Projects() {
    return (
       <div className={classes.Projects}>
        
        <h1>Projects</h1>    

        <Card 
          title="Github User Fetch Website" 
          text="Simple website to get data of github users. Through this project, I was able to learn more about react and APIs."
          //image={projeto1}
          link="https://lunatc.github.io/git-api/"
          date="2021"
        />

        <Card 
          title="React ToDo App" 
          text="Project of making a to-do list app."
          //image={projeto1}
          link="https://lunatc.github.io/React-ToDo-App/"
          date="2023"
        />
        
        </div>
    );
  }
  
export default Projects;