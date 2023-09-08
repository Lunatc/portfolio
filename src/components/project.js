import classes from "./styles/project.module.css"


function Project(props) {
    return (
        <div className={classes.Project}>
            <section className={classes.texto}>
                <h2>{props.title}</h2>
                <p className={classes["small-text"]}>{props.date}</p>
                <p>{props.text}</p>
                <p> className={props.skills}</p>
                <img>{props.img}</img>
            </section>
        </div>
    );
}

export default Project;