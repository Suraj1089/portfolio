import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Stepper from '@mui/joy/Stepper';
import Typography, { typographyClasses } from '@mui/joy/Typography';


export default function Resume() {
  return (
    <Stepper
      orientation="vertical"
      sx={(theme) => ({
        '--Stepper-verticalGap': '2.5rem',
        '--StepIndicator-size': '2.5rem',
        '--Step-gap': '1rem',
        '--Step-connectorInset': '0.5rem',
        '--Step-connectorRadius': '1rem',
        '--Step-connectorThickness': '4px',
        '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
        [`& .${stepClasses.completed}`]: {
          '&::after': { bgcolor: 'success.solidBg' },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: '4px solid',
            borderColor: '#fff',
            boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.softDisabledColor',
        },
        [`& .${typographyClasses['title-sm']}`]: {
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '10px',
        },
      })}
    >
        <Step
        completed
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">About</Typography>
        </div>
        <Typography >Software Engineer with expertise in Python, Django, and FastAPI. Proficient in building scalable, reliable
systems and solving real-world problems through clean, efficient code. Strong foundation in data structures,
algorithms, and teamwork, with a commitment to delivering reliable, high-quality solutions.</Typography>
      </Step>
      <Step
        completed
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Education</Typography>
        </div>
        <div>
          <Typography variant="h6">
            D Y Patil College of Engineering Pune (University of Pune)
          </Typography>
          <Typography variant="body1">BE in Information Technology</Typography>
          <Typography variant="body2">
            Courses: Operating Systems, Data Structures and Algorithms,
            Databases, and Computer Networks.
          </Typography>
          <Typography variant="h6">Enzo chem Junior College Yevla</Typography>
          <Typography variant="body1">High School (12th)</Typography>
        </div>
      </Step>
      <Step
        completed
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Experience</Typography>
        </div>
        <div>
          <Typography variant="h6">
            Ridecell (Associate Software Engineer)
          </Typography>
          <Typography variant="body2">Jun 2024 – Present</Typography>
          <ul>
            <li>
              Collaborated on deploying scalable systems to onboard 25,000+
              vehicles, streamlining operations for rental services.
            </li>
            <li>
              Refactored critical components to reduce production bugs by 30%,
              improving platform stability.
            </li>
            <li>
              Collaborated on AI-powered pricing and fleet damage detection
              tools, enhancing efficiency for 500+ customers.
            </li>
            <li>
              Resolved 20+ high-priority issues, improving reliability for
              car-sharing platforms.
            </li>
            <li>
              Design RESTful APIs and integrate with frontend systems and
              third-party services.
            </li>
            <li>
              Participating in code reviews, contributing to a testing and
              automation culture, and supporting our quality practices.
            </li>
          </ul>
          <Typography variant="h6">
            Ridecell (Backend Developer Intern)
          </Typography>
          <Typography variant="body2">Aug 2023 – Jun 2024</Typography>
          <ul>
            <li>
              Enhanced system response times by 15% through backend
              optimizations.
            </li>
            <li>
              Worked on different type of vehicle allocation algorithms which
              allocates vehicle to the reservation based on various conditions.
            </li>
            <li>
              Collaborate with other software developers, testing team to plan,
              design and develop applications.
            </li>
            <li>
              Work with RESTful APIs and collaborate with frontend teams for
              smooth integration.
            </li>
          </ul>
          <Typography variant="h6">
            Insponse (System Engineer Intern)
          </Typography>
          <Typography variant="body2">Jan 2023 – April 2023</Typography>
          <ul>
            <li>
              Delivered microservices-based solutions, boosting app
              functionality from 20% to 80%.
            </li>
            <li>
              Utilized multiple technologies to provide efficient solutions.
            </li>
            <li>
              Develop and maintain robust backend services using Node.js,
              FastAPI and Docker.
            </li>
          </ul>
        </div>
      </Step>
      <Step
        active
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Skills</Typography>
        </div>
        <div>
          <Typography variant="body1">Languages: Python, Go.</Typography>
          <Typography variant="body1">
            Frameworks and Databases: Django, Django Rest Framework, FastAPI,
            PostgreSQL.
          </Typography>
          <Typography variant="body1">
            Others: Interest in Generative AI and LLMs.
          </Typography>
        </div>
      </Step>
      <Step
        active
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Projects</Typography>
        </div>
        <div>
          <Typography variant="h6">
            SPPU Result Converter (Analyse student result faster)
          </Typography>
          <Typography variant="body2">Live-link Github</Typography>
          <ul>
            <li>
              Created a web-based result conversion application that is
              currently utilized by over 15 administrative staff members,
              leading to a substantial reduction in manual errors and an
              increase in overall data integrity.
            </li>
            <li>
              Developed a result conversion tool for college administration,
              reducing manual effort from 1 days to 5 minutes. Utilized Python
              and streamlit automation, adopted by 5+ administrative staff.
            </li>
          </ul>
          <Typography variant="h6">
            Aiinteriviewer (Hire talent and conduct interviews with Ai)
          </Typography>
          <Typography variant="body2">Live-link Github</Typography>
          <ul>
            <li>
              AI Interviewer app used to schedule interviews with candidates and
              interviews are taken by Ai.
            </li>
            <li>
              Both candidates and HR can register on the website. HR can
              schedule an interview of the candidate and the Ai takes interview
              at the scheduled time.
            </li>
            <li>
              Used JWT authentication, React js for frontend and backend is
              built with NodeJs. Ai service is built with Django, Langchain, and
              Openai APIs.
            </li>
          </ul>
        </div>
      </Step>
      <Step
        active
        indicator={
          <StepIndicator variant="solid" color="success">
            <CheckRoundedIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography level="title-sm">Certificates</Typography>
        </div>
  <div>
    <Typography variant="h6">Licenses & Certifications</Typography>

    <Typography variant="h6">Django</Typography>
    <Typography variant="body2">LearnCodeOnline.in | Issued Mar 2022</Typography>
    <ul>
      <li>Credential ID: 4732325-86241</li>
      <li>Skills: Full-Stack Development, Django</li>
    </ul>

    <Typography variant="h6">Data Structure and Algorithms</Typography>
    <Typography variant="body2">Udemy | Issued Oct 2021</Typography>
    <ul>
      <li>Skills: Data Structures, Algorithms, C++, C (Programming Language)</li>
    </ul>

    <Typography variant="h6">3D Modeling</Typography>
    <Typography variant="body2">Udemy | Issued Aug 2021</Typography>
    <ul>
      <li>Course on 3D modeling fundamentals.</li>
    </ul>

    <Typography variant="h6">Introduction to Programming Using Python</Typography>
    <Typography variant="body2">Udemy | Issued Jul 2021</Typography>
    <ul>
      <li>Skills: Python (Programming Language)</li>
    </ul>

    <Typography variant="h6">Python for Data Science and Machine Learning Bootcamp</Typography>
    <Typography variant="body2">Udemy</Typography>
    <ul>
      <li>Credential ID: UC-64b76aa0-725c-41e1-9181-1c86689d5e14</li>
      <li>Skills: Machine Learning, Natural Language Processing (NLP), Data Science</li>
    </ul>
  </div>

        
      </Step>
      <Step
        disabled
        // indicator={
        //   <StepIndicator variant="solid" color="success">
        //     <CheckRoundedIcon />
        //   </StepIndicator>
        // }
      >
        <div>
          <Typography level="title-sm"></Typography>
        </div>
        
      </Step>
    </Stepper>
  );
}
