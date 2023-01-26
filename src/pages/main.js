import classes from './styles/main.module.css';
import foto from '../assets/images/foto.jpg';

function Main() {
    return (
        <div className={classes.Main}>
            <div>
                <img src={foto} alt="Foto da Cintia"></img>
            </div>
            <div>
                <h1>Olá, eu sou a Cíntia</h1>
                <p>Estudante de ciência da computação, com interesse especial em UI/UX</p>
                <br></br>
                <p>Paragrafo 2</p>
            </div>
            
        </div>
    );
}

export default Main;