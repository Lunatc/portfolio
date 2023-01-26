import classes from "./styles/card.module.css"


function Card(props) {
    return (
        <div className={classes.Card}>
            <section>
                <img className={classes.Image} src={props.image} alt="Foto projeto 1"></img>
            </section>
            <section className={classes.texto}>
                <h2>{props.title}</h2>
                <p className={classes["small-text"]}>Data: 10/01/2023</p>
                <p>{props.text}</p>
                <div className={classes.btnline}>
                    <button className={classes.btn}>
                        Acessar
                    </button>
                    <button className={classes.btn}>
                        Saiba mais
                    </button>
                </div>
            </section> 
        </div>
    );
}

export default Card;