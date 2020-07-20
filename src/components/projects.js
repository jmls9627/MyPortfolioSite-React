import React, {Component} from 'react';
import { Tabs,Tab, Grid, Cell, Card,CardTitle, CardActions,Button,CardText } from 'react-mdl';

class Project extends Component {
   constructor(props){
     super(props);
     this.state={activeTab:0};
   }
   toggleCategories(){
     //React
    if(this.state.activeTab===0){
      return(
        <div>
       <div className="projects-grid">
         {/*Proyect 1 */}
        <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
          <CardTitle style={{color: 'black', height: '150px',
          background: ' url(https://ih1.redbubble.net/image.373612698.9613/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg)  center / cover'}} >React: Getting Started</CardTitle>
          <CardText>
           How to work with Classes and function components with React Hooks, creating a kid game with it.
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/React-Getting_Started" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>     
        </Card>
        
        
          {/*Proyect 3 */}
          <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
          <CardTitle style={{color: 'black', height: '150px',
          background: 'url(https://ih1.redbubble.net/image.373612698.9613/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg) center / cover'}} >My Porfolio Site</CardTitle>
          <CardText style={{height:'100%', width:"100%" }}>
            My Portfolio site in React step by step using react-mdl 
            using what I have learned working with react .
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/MyPortfolioSite-React" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>
        </Card>
        </div>

        <div className="projects-grid">
           {/*Proyect 2*/}
         <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
          <CardTitle style={{color: 'black', height: '150px',
          background: 'url(https://ih1.redbubble.net/image.373612698.9613/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg) center / cover'}} >Fundamentals</CardTitle>
          <CardText>
          How to build React applications that are simple and easy to maintain.
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/React_Fundamentals" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>
        </Card>
        </div >
        
        </div>
  
      )
   } //Angular
   else if(this.state.activeTab===1){
      return(
        <div>
      <div  className="projects-grid"> 
        {/*Proyect 1 */}
      <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
        <CardTitle style={{color: 'black', height: '150px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular: Getting Started</CardTitle>
        <CardText>
         How to create components and user interfaces, data-binding, retrieving data using HTTP...
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-G.Started" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
      </Card>

       {/*Proyect 2 */}
       <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
        <CardTitle style={{color: 'black', height: '150px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular: Fundamentals</CardTitle>
        <CardText>
         Creating an app using: components, services, directives, pipes, routing, HTTP...
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Fundamentals" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
      </Card>
      </div>
      <div className="projects-grid">
             {/*Proyect 3 */}
             <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
        <CardTitle style={{color: 'black', height: '150px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular-SpringBoot</CardTitle>
        <CardText>     
        How it works all the pieces creating a complete application in Spring Boot + Angular.  
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Spring-Boot" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
      </Card>
       {/*Proyect 4 */}
       <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
        <CardTitle style={{color: 'black', height: '150px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular Forms</CardTitle>
        <CardText>     
         How to create forms, style them, and use data binding and validation for a better manipilation.
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Forms-" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
      </Card>
      </div>
      <div className="projects-grid">
       {/*Proyect 5 */}
       <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
        <CardTitle style={{color: 'black', height: '150px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular CLI</CardTitle>
        <CardText>     
         How to create, generate, lint, debug, test, build, and more using Angular CLI.
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-CLI" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
      </Card>
      </div>
      </div>
      
    )
    } else if(this.state.activeTab===2){
      return(
        <div>
      <div className="projects-grid"> 
      {/*Proyect 1*/}
      <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
       <CardTitle style={{color: 'black', height: '100px',
       background: 'url(https://blog.fullstacktraining.com/content/images/2017/11/ts-11.png) center / cover'}} > Getting Started</CardTitle>
       <CardText>     
       The most important features of TypeScript, and quickly make you productive with the language.
       </CardText>          
       <CardActions border>
       <a href="https://github.com/jmls9627/TS_GettingStarted" 
       rel="noopener noreferrer" target="_blank">
       <Button colored>GitHub</Button>
       </a>
       </CardActions>
     </Card>

      {/*Proyect 2*/}
      <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
       <CardTitle style={{color: 'black', height: '100px',
       background: 'url(https://blog.fullstacktraining.com/content/images/2017/11/ts-11.png) center / cover'}} > In depth </CardTitle>
       <CardText>     
       In this course I learned all of the major language features in the latest versions of TypeScript.
       </CardText>          
       <CardActions border>
       <a href="https://github.com/jmls9627/TypeScript-In-depth" 
       rel="noopener noreferrer" target="_blank">
       <Button colored>GitHub</Button>
       </a>
       </CardActions>
     </Card>
     </div>
     </div>
    )
    }  else if(this.state.activeTab===3){
      return(
        <div>
        <div className="projects-grid"> 
        {/*Proyect 1*/}
        <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
         <CardTitle style={{color: 'black', height: '100px',
         background: 'url(https://lh3.googleusercontent.com/proxy/jVsnn5cCUw0DjLrvCJR-UDZBYGJsE8ANVqOUO689Isx8B0_8tblPwDYguNQiYADJYE4WMdEOQw5CH-jQYiNmBK4) center / cover'}} > HTML/CSS</CardTitle>
         <CardText>     
         Creating different websites step by step using html and css.
         </CardText>          
         <CardActions border>
         <a href="https://github.com/jmls9627/html-css_course" 
         rel="noopener noreferrer" target="_blank">
         <Button colored>GitHub</Button>
         </a>
         </CardActions>
       </Card>
  
        {/*Proyect 2*/}
        <Card shadow={9} style={{width:'40%', height:'10%', margin: 'auto',marginTop:'15px'}}>
         <CardTitle style={{color: 'black', height: '100px',
         background: 'url(https://lh3.googleusercontent.com/proxy/jVsnn5cCUw0DjLrvCJR-UDZBYGJsE8ANVqOUO689Isx8B0_8tblPwDYguNQiYADJYE4WMdEOQw5CH-jQYiNmBK4) center / cover'}} > HTML/CSS/JS </CardTitle>
         <CardText>     
         Front-End Development HTML5,CSS and JavaScript.
         </CardText>          
         <CardActions border>
         <a href="https://github.com/jmls9627/html-css-and-javascript" 
         rel="noopener noreferrer" target="_blank">
         <Button colored>GitHub</Button>
         </a>
         </CardActions>
       </Card>
       </div>
       </div>
    )
    }
   }
   
render(){
    return(
     <div className="category-tabs">
       <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
        <Tab>React</Tab>
        <Tab>Angular</Tab>
        <Tab>TypeScript</Tab> 
        <Tab>HTML/CSS</Tab>
       </Tabs>
         <Grid >
           <Cell col={12}>
          <div className="content"> {this.toggleCategories()}</div>
           </Cell>
         </Grid>
         </div>
    )
  }
}

export default Project;