import classes from './styles/main.module.css';
import foto from '../assets/images/foto.jpg';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className={classes.Main}>
            <div className={classes.hero}>
                <div className={classes.foto}>
                    <img src={foto} alt="Foto da Cintia"></img>
                </div>
                <div className={classes.texto}>
                    <h1>Olá, eu sou a Cíntia</h1>
                    <br></br>
                    <p>Estudante de ciência da computação, com interesse especial em UI/UX. I’ve studied last semester in KNU in South Korea and it was one of the best decisions of my life. Now I’m finishing my undergraduate program, studying UI/UX by myself and planning to enter a master’s program related to HCI.</p>
                    <br></br>
                    <p>I’m interested in many topics and hobbies like journaling, reading, drawing and painting. I’m also a cheerleader and I love participating in activities inside the university.</p>
                    <br></br>
                    <Link to='/about'>More...</Link>
                </div> 
            </div>
        </div>
    );  
}

export default Main;