import { Route, Switch } from 'react-router-dom';

import classes from "./App.css"

import Header from "./layouts/header";
import Sidebar from './layouts/sidebar';
//import Footer from "./layouts/footer";
import Projects from './pages/projects';
import Main from './pages/main';
import About from './pages/about';
import Curriculum from './pages/curriculum';


function App() {
  return <div>
    <Header/>
    <div className={classes.App}>
      <Sidebar/>
      <Switch>
        <Route path='/Portfolio' exact>
          <Main/>
        </Route>
        <Route path='/Portfolio/sobre'>
          <About/>
        </Route>
        <Route path='/Portfolio/curriculo'>
          <Curriculum/>
        </Route>
        <Route path='/Portfolio/projetos'>
          <Projects/>
        </Route>
      </Switch>
    </div>
    
    {/*<Footer/>*/}
  </div>;
}

export default App;
