import classes from './styles/main.module.css';

function Main() {
    return (
        <div className={classes.Main}>
            <div className={classes["main-content"]}>
                <h1>Olá, eu sou a Cíntia</h1>
                <p>Estudante de ciência da computação, com interesse especial em UI/UX</p>
            </div>
        </div>
    );
}

export default Main;