import classes from "./styles/card.module.css"
import projeto1 from "../assets/images/projeto1.png"

function Card() {
    return (
        <div className={classes.Card}>
            <section>
                <img className={classes.Image} src={projeto1} alt="Foto projeto 1"></img>
            </section>
            <section className={classes.texto}>
                <h2>Título</h2>
                <p>Este projeto foi desenvolvido com objetivo de desenvolver xxx para funcionar de tal de jeito. Ele foi desenvolvido utilizando a framework xxx com auxílio das ferramentas xyz.</p>
                <button className={classes.btn}>
                    Saiba mais
                </button>
            </section> 
        </div>
    );
}

export default Card;