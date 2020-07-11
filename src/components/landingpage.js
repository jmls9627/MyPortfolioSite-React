import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import foto from '../images/2.jpg'

class Landing extends Component {
render(){
    return(
     <div style={{width:'100%', margin:'auto'}}>
       <Grid className='landing-grid'>
         <Cell col={12}>
         <img  src={foto}  alt='foto' className="avatar-img"/>
          <div className="banner-text">
           
            <h1>Software Developer</h1>
           
            <br/>

            <p>HTML/CSS | Java | C# | JavaScript | TypeScript | React | Angular | Mongo | SpringMVC </p>
            
           <div className="social-links">
              {/*LinkedIn*/ }
              <a href="https://www.linkedin.com/in/jose-l%C3%B3pez-179239199/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden='true'/>
              </a>
               {/*GitHub*/ }
               <a href="https://github.com/jmls9627" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-github-square" aria-hidden='true'/>
              </a>
            </div>
          </div>
         </Cell>      
       </Grid>
     </div>
    )
  }
}

export default Landing;