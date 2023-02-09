import classes from "./styles/card.module.css"


function Card(props) {
    return (
        <div className={classes.Card}>
            <a href={props.link}>
                <section className={classes.texto}>
                    <h2>{props.title}</h2>
                    <p className={classes["small-text"]}>{props.date}</p>
                    <p>{props.text}</p>   
                </section>
            </a> 
        </div>
    );
}

export default Card;