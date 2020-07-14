import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './landingpage';
import Projects from './projects';
import Resume from './resume';

const Main=()=>(
<Switch>
   <Route exact path='/'  component={Landing}/>
   <Route path='/projects'component={Projects}/>
   <Route path='/resume'  component={Resume}/>
</Switch>
)
    


export default Main; 