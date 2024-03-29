import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(3),
  },
  resume: {
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
  },
  resumeBold: {
    fontWeight: 500,
  },
  button: {
    textDecoration: 'none',
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <Layout>
      <Container className={classes.content}>
        <Box className={classes.resume}>
          <Typography className={classes.resumeBold}>EMPLOYMENT</Typography>
          <hr />
          <Typography className={classes.resumeBold}>
            Assured Information Security (AIS)
          </Typography>
          <Typography>Rome, NY, Rochester, NY (June 2010 - January 2022)</Typography>
          <ul>
            <li>
              Software Engineer and Technical Lead for efforts to develop cyber capabilities in
              support of military operations
            </li>
            <li>
              Developed command and control software with APIs and SDK to integrate cyber
              capabilities using Python, Redis, MongoDB, and RethinkDB
            </li>
            <li>
              Integrated capabilities onto operation cyber infrastructures using Docker, Bash,
              and Python
            </li>
            <li>
              Developed full-stack web user interfaces using React, JavaScript, CSS, GraphQL,
              and Python
            </li>
            <li>
              Developed networking software to perform message creation, routing, and parsing
              between endpoints using Java, Java NIO, Apache MINA, and Apache ActiveMQ JMS
            </li>
            <li>
              Developed and integrated user interfaces using Java Swing, PostgreSQL database,
              Hibernate ORM library, and the JUNG library
            </li>
            <li>
              Designed and performed demonstrations of systems for customers and visitors
            </li>
            <li>
              Designed and oversaw test procedures to ensure quality software was delivered to
              customers
            </li>
            <li>
              Founder and Site Lead for the AIS Rochester, NY office
            </li>
            <li>
              Member of AIS Technical Council
            </li>
            <li>
              Top Secret/SCI Clearance
            </li>
          </ul>
          <Typography className={classes.resumeBold}>SKILLS</Typography>
          <hr />
          <ul>
            <li>Software Development</li>
            <ul>
              <li>Proficient - Python, Bash, Docker, Redis, RethinkDB, Phabricator, Git</li>
              <li>
                Experience - JavaScript, HTML/CSS, React, C, Java, GraphQL, MongoDB, SQL, Gitlab CI,
                Networking (TCP, UDP, IP, Socket, Wireshark), Cross Domain Solutions, Machine
                Learning
              </li>
            </ul>
            <li>Software Engineering Process</li>
            <ul>
              <li>
                Created, documented, and trained team on multiple iterations of software
                development process (based on Agile Scrum) to support rapid team growth
              </li>
              <li>Certified ScrumMaster, Scrum Alliance</li>
              <li>
                Guided development of improving team&apos;s automated testing and continuous
                integration capabilities (formatters, linters, static analysis, automated
                releases, virtual environments)
              </li>
            </ul>
            <li>Engineering Management</li>
            <ul>
              <li>
                Promote staff development through training initiatives, morale events, and
                performance reviews
              </li>
            </ul>
            <li>Technical Writing</li>
            <ul>
              <li>
                Ability to efficiently produce concise, organized proposals, white papers,
                reports, and software documentation/guides
              </li>
              <li>
                Worked on custom Pandoc scripts for generating PDF/HTML documentation in Markdown
              </li>
              <li>
                Completed DoD Elevated Level of Assurance (ELA) Level II Training
              </li>
              <li>
                Created and presented Technical Writing Lunch and Learn to AIS on Technical Writing
              </li>
            </ul>
            <li>Public Speaking</li>
            <ul>
              <li>
                Perform critical demonstrations across the country for decision making parties
              </li>
            </ul>
          </ul>
          <Typography className={classes.resumeBold}>EDUCATION</Typography>
          <hr />
          <p>Drexel University - M.S. Computer Science - December 2013</p>
          <p>
            Clarkson University - B.S. Computer Science, Mathematics; Minor: Business - May 2010
          </p>
          <Typography className={classes.resumeBold}>OTHER EXPERIENCE</Typography>
          <hr />
          <p>Clarkson Writing Center - Potsdam, NY - August 2007 - May 2010</p>
          <ul><li>Tutor that helped students with writing assignments</li></ul>
          <p>Eastman Kodak Company - Rochester, NY - May 2007 - August 2008</p>
          <ul><li>Software Development and QA Intern on the Kodak Picture Kiosk Team</li></ul>
          <Typography className={classes.resumeBold}>INTERESTS</Typography>
          <hr />
          <p>
            Basketball, Volleyball, Golf, Skiing, SCUBA, Gaming, Investing,
            Cryptocurrencies/Blockchain, Fantasy Sports
          </p>
          <a href="/Timothy-Hanna-Resume.pdf" download className={classes.button}>
            <Button variant="contained" color="primary" startIcon={<CloudDownloadIcon />}>
              Download a Copy
            </Button>
          </a>
        </Box>
      </Container>
    </Layout>
  );
}
