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
                style={{height: '240px', borderRadius:"100%" }}
                 />
            </div>

            <h2 style={{paddingTop: 'em'}}>José Manuel López</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Avid programmer with the ability to learn new technologies quickly and to work and communicate effectively as an individual and as part of a team.
               Fast learner and proactive Software Developer who enjoys collaborating with team members and stakeholders. Resourceful professional who has accomplished
               several projects in a deadline-oriented environment and always look for challenges that allow the growth on a personal and professional level.  </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>-------</p>
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
              schoolName="Informatics Science University (UCI)"
              schoolDescription=""
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Software Developer-Intern at CIGED. La Habana. Cuba."
              jobDescription="The  Computerization of Document Management Center  attached to school 2, develops comprehensive computer systems and services of high quality and competitiveness in computerization or improvement of document management processes."
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
                  progress={70}
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
                      progress={60}
                      />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;