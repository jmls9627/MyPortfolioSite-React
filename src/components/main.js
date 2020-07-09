import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main=()=>(
<Switch>
   <Route exact path='/'  component={Landing}/>
   <Route path='/aboutme' component={About}/>
   <Route path='/contact' component={Contact}/>
   <Route path='/projects'component={Projects}/>
   <Route path='/resume'  component={Resume}/>
</Switch>
)
    


export default Main; 