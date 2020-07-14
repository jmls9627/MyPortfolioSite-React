import React, {Component} from 'react';
import { Tabs,Tab, Grid, Cell, Card,CardTitle, CardActions,Button,CardMenu,IconButton, CardText } from 'react-mdl';

class Project extends Component {
   constructor(props){
     super(props);
     this.state={activeTab:0};
   }
   toggleCategories(){
     //React
    if(this.state.activeTab===0){
      return(
       <div className="projects-grid">
         {/*Proyect 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React: Getting Started</CardTitle>
          <CardText>
          In this course I learned how to work with Classes and function components with React Hooks, and creating a kid game with it.
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/React-Getting_Started" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>
          <CardMenu style={{color:"#fff"}}>
             <IconButton name="share"/>
          </CardMenu>
        </Card>
        
         {/*Proyect 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Fundamentals</CardTitle>
          <CardText>
          In this course I learned how to build React applications that are simple and easy to maintain.
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/React_Fundamentals" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>
          <CardMenu style={{color:"#fff"}}>
             <IconButton name="share"/>
          </CardMenu>
        </Card>
          
           {/*Proyect 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My Porfolio Site</CardTitle>
          <CardText>
            My Portfolio site in React step by step using react-mdl.
          </CardText>          
          <CardActions border>
          <a href="https://github.com/jmls9627/MyPortfolioSite-React" 
          rel="noopener noreferrer" target="_blank">
          <Button colored>GitHub</Button>
          </a>
          </CardActions>
          <CardMenu style={{color:"#fff"}}>
             <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
        
      )
   } //Angular
   else if(this.state.activeTab===1){
      return(
      <div  className="projects-grid"> 
        {/*Proyect 1 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular: Getting Started</CardTitle>
        <CardText>
        In this course I learned how to create components and user interfaces, data-binding, retrieving data using HTTP...
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-G.Started" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color:"#fff"}}>
           <IconButton name="share"/>
        </CardMenu>
      </Card>

       {/*Proyect 2 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular: Fundamentals</CardTitle>
        <CardText>
        In this course I learned how to create an aplication using: components, services, directives, pipes, routing, HTTP, and even testing.
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Fundamentals" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color:"#fff"}}>
           <IconButton name="share"/>
        </CardMenu>
      </Card>
             {/*Proyect 3 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular-SpringBoot</CardTitle>
        <CardText>     
        In this course I learned how all the pieces work together creating a complete application in Spring Boot + Angular.  
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Spring-Boot" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color:"#fff"}}>
           <IconButton name="share"/>
        </CardMenu>
      </Card>
       {/*Proyect 4 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular Forms</CardTitle>
        <CardText>     
        In this course I learned how to create forms, style them, and use data binding and validation.
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-Forms-" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color:"#fff"}}>
           <IconButton name="share"/>
        </CardMenu>
      </Card>
       {/*Proyect 5 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px',
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ35gXFwGogXMSi58fepPWCtENZD9EU-2uAwQ&usqp=CAU) center / cover'}} >Angular CLI</CardTitle>
        <CardText>     
        In this course I learned how to create, generate, lint, debug, test, build, and more using Angular CLI.
        </CardText>          
        <CardActions border>
        <a href="https://github.com/jmls9627/Angular-CLI" 
        rel="noopener noreferrer" target="_blank">
        <Button colored>GitHub</Button>
        </a>
        </CardActions>
        <CardMenu style={{color:"#fff"}}>
           <IconButton name="share"/>
        </CardMenu>
      </Card>
      </div>
    )
    } else if(this.state.activeTab===2){
      return(
      <div className="projects-grid"> 
      {/*Proyect 1*/}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
       <CardTitle style={{color: 'white', height: '176px',
       background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzbN9w__IcbRWC5OAFJ-w8AducsUBa-Y7C2A&usqp=CAU) center / cover'}} >TypeScript: Getting Started</CardTitle>
       <CardText>     
       In this course I learned the most important features of TypeScript, and quickly make you productive with the language.
       </CardText>          
       <CardActions border>
       <a href="https://github.com/jmls9627/TS_GettingStarted" 
       rel="noopener noreferrer" target="_blank">
       <Button colored>GitHub</Button>
       </a>
       </CardActions>
       <CardMenu style={{color:"#fff"}}>
          <IconButton name="share"/>
       </CardMenu>
     </Card>

      {/*Proyect 2*/}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
       <CardTitle style={{color: 'white', height: '176px',
       background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzbN9w__IcbRWC5OAFJ-w8AducsUBa-Y7C2A&usqp=CAU) center / cover'}} >TypeScript In depth </CardTitle>
       <CardText>     
       In this course I learned all of the major language features in the latest versions of TypeScript.
       </CardText>          
       <CardActions border>
       <a href="https://github.com/jmls9627/TypeScript-In-depth" 
       rel="noopener noreferrer" target="_blank">
       <Button colored>GitHub</Button>
       </a>
       </CardActions>
       <CardMenu style={{color:"#fff"}}>
          <IconButton name="share"/>
       </CardMenu>
     </Card>
     </div>
    )
    }  else if(this.state.activeTab===3){
      return(
      <div><h1>This is JavaScript</h1></div>
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
        <Tab>JavaScript</Tab>
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