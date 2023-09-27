import classes from './styles/projects.module.css'
import Card from '../components/card.js'
//import projeto1 from "../assets/images/projeto1.png"

function Projects() {
    return (
       <div className={classes.Projects}>
        
        <h1>Projects</h1>    

        <Card 
          title="Previous Portfolio" 
          text="This is the first draft of this portfolio. I decided to go for a very different design later."
          //image={projeto1}
          link="https://www.figma.com/proto/LxXYYqXtZZxTqHWQuZnDKG/My-Portfolio?type=design&t=Ain0R9lAQ1Zq9crY-8&scaling=scale-down-width&page-id=0%3A1&node-id=3-3&starting-point-node-id=3%3A3&hide-ui=1"
          date="2022"
        />

        <Card 
          title="UI/UX Blog idea prototype" 
          text="Prototype for a blog about UI/UX, HCI and Design."
          //image={projeto1}
          link="https://www.figma.com/proto/lVnMxatk2g4tspnKzTszjo/My-Blog?node-id=1-12&scaling=scale-down-width&hide-ui=1&t=uYgIOdqOsrnnDcqP-8"
          date="2022"
        />

        <Card 
          title="Github User Fetch Website" 
          text="Website to get data of github users. Through this project, I was able to learn more about react and APIs."
          //image={projeto1}
          link="https://lunatc.github.io/git-api/"
          date="2021"
        />

        <Card 
          title="Plague Chart - Epidemiology Analysis Website" 
          text="This project was part of my Probability and Statistics course"
          //image={projeto1}
          link="https://www.figma.com/proto/gPcFuAKatxUu8Aj3poljDz/Plague-Chart?type=design&node-id=57-13879&t=g1sHzzzhr6OMkZMZ-8&scaling=scale-down-width&page-id=29%3A13634&starting-point-node-id=57%3A13879&hide-ui=1"
          date="2021"
        />

        <Card 
          title="SCIMOV Project Prototype" 
          text="This prototype is part of my undergraduate research project"
          //image={projeto1}
          link="https://www.figma.com/proto/QXJWqVESPwOFmC3l42KjzK/Site-Prototypes?node-id=5-8&scaling=scale-down-width&hide-ui=1"
          date="2021"
        />

        <Card 
          title="Astro Cat app- NASA Hackathon project" 
          text="Mobile app for learning more about space through NASA data, this project got 3rd place in our city competition"
          //image={projeto1}
          link="https://www.figma.com/proto/x6IFvELvyZC8ajsfJGbt9A/Hackton-Design?node-id=181-89&starting-point-node-id=181%3A89&scaling=scale-down&hide-ui=1&t=PTvo5QawL6iXiCkV-8"
          date="2021"
        />
        
        </div>
    );
  }
  
export default Projects;