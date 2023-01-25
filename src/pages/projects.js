import classes from './styles/projects.module.css'
import Card from '../components/card.js'

function Projects() {
    return (
       <div className={classes.Projects}>
        
        <h1>Projects</h1>

        <Card />
        <Card />
        
        </div>
    );
  }
  
export default Projects;