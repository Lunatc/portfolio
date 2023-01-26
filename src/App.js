import { Route, Switch } from 'react-router-dom';

import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Projects from './pages/projects';
import Main from './pages/main';
import About from './pages/about';


function App() {
  return <section>
    <Header/>
    <div>
        <Switch>
          <Route path='/' exact>
            <Main/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
        </Switch>
    </div>  
    <Footer/>
  </section>;
}

export default App;
