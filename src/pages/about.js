import classes from './styles/about.module.css';


function About() {
    return (
        <div className={classes.About}>
            
            <h1>Brief introduction</h1>
            <br></br>
            <p className={classes["small-text"]}>Hello, my name is Cintia Braz, and I'm 22 years old. I'm a recent graduate in Computer Science at Unesp, Brazil. I'm looking for my first job opportunity.</p>
            <br></br>
            <p className={classes["small-text"]}>During my studies, I always tried to participate in the various activities, events, and courses the university offered. In 2022 I had the chance to do an academic exchange through my university for KNU in South Korea. It was a great experience that brought me a lot of personal growth and greater confidence to use my English.</p>        
            <br></br>
            <p className={classes["small-text"]}>Whenever I have free time, I like to play games, draw, read, travel, and try new temporary hobbies.</p>
            <br></br>
            
            <h1>Education</h1>
            <hr/>
            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>B.S in Computer Science</h3>
                    <p className={classes["small-text"]}>UNESP - Universidade Estadual Paulista “Júlio de Mesquita Filho”</p>
                </div>
                <div className={classes.date}>
                   <p>2018 - Present</p>
                </div>
            </div>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Exchange Program</h3>
                    <p className={classes["small-text"]}>KNU - Kyungpook National University</p>
                </div>
                <div className={classes.date}>
                   <p>2022</p>
                </div>
            </div>

            <br></br>
            <h1>Experience</h1>
            <hr/>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>FrontEnd Web Developer</h3>
                    <p className={classes["small-text"]}>ECCjr - Computer Science Junior Enterprise</p>
                </div>
                <div className={classes.date}>
                   <p>2019 - 2022</p>
                </div>
            </div>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>Undergraduate Research Program</h3>
                    <p className={classes["small-text"]}>Scimov Project</p>
                </div>
                <div className={classes.date}>
                   <p>2020 - 2021</p>
                </div>
            </div>

            <br></br>
            <h1>Posters and Workshops</h1>
            <hr/>

            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>AUIN 15 anos</h3>
                    <p className={classes["small-text"]}>Poster: Scientific content mediation platform in audiovisual format</p>
                </div>
                <div className={classes.date}>
                   <p>2022</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.text}>
                    <h3>CIC - XXXIII Congresso de Iniciação Científica da UNESP</h3>
                    <p className={classes["small-text"]}>Poster: User interface prototype for an audiovisual scientific content platform with a focus on usability</p>
                </div>
                <div className={classes.date}>
                   <p>2021</p>
                </div>
            </div>
        </div>
    );
}

export default About;
