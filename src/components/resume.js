import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import foto from '../images/3.jpg'

class Resume extends Component {
render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
               src={foto}  alt='foto'
                style={{height: '240px', borderRadius:"100%",marginTop:'50px' }}
                 />
            </div>

            <h2 style={{paddingTop: 'em'}}>José Manuel López</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Dedicated and focused software developer with more than 2 years of programming experience and excellent time management and organization skills. Detail-oriented programmer who enjoys challenges and teamwork. Seeking to obtain a full-time position where my strong technical and analytical skills will contribute to the benefit of the company and its customers. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Miami, Florida</p>
            <h5>Phone</h5>
            <p>(786) 486-1273</p>
            <h5>Email</h5>
            <p>jmls9627@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2019}
              schoolName="University of Computer Sciences (UCI)"
              schoolDescription="Bachelor of Science in Computer Science"
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Software Developer-Intern at CIGED. Havana. Cuba."           
              jobDescription="
                Design and implementation of web pages on the Alfresco Shared platform using HTML and Bootstrap as a style.
                Maintenance and development of website functionalities using JavaScript as a programming language.
              	I worked on the Migration of the RepXos search and navigation interfaces to the Alfresco Shared platform.
              	I worked on the migration of the search and navigation components from RepXos to Angular JS.
              	I worked on developing XML content models for the Alfresco Shared Platform.
              	Responsible for deployment and maintanance of company's web portal using ALFRESCO content management system.
              " 
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={70}
                />
                  <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                  skill="C#"
                  progress={65}
                  />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="TypeScript"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                      <Skills
                      skill="Angular"
                      progress={60}
                      />
                      <Skills
                      skill="PostgreSQL"
                      progress={60}
                      />
                      <Skills
                      skill="SpringMVC"
                      progress={50}
                      />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;