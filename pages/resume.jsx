import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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
          <Typography>Rome, NY, Rochester, NY (June 2010 - Present)</Typography>
          <ul>
            <li>
              Software Engineer and Technical Lead for efforts to develop cyber capabilities in
              support of military operations
            </li>
            <li>
              Developed command and control software with APIs and SDK to integrate cyber
              capabilities using Python, Redis, MongoDB, and RethinkDB.
            </li>
            <li>
              Integrated capabilities onto operation cyber infrastructures using Docker, Bash,
              and Python.
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
              Design and oversee test procedures to ensure quality software is delivered to
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
              <li>Proficient – Python, Bash, Docker, Redis, RethinkDB, Phabricator, Git</li>
              <li>
                Experience – JavaScript, HTML/CSS, React, C, GraphQL, MongoDB, SQL, Gitlab CI,
                Networking (TCP, UDP, IP, Socket, Wireshark), Cross Domain Solutions
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
                Guided development of improving team’s automated testing and continuous
                integration capabilities (formatters, linters, static analysis, automated
                releases, virtual environments)
              </li>
            </ul>
            <li>
              Engineering Management – Promote staff development through training
              initiatives, morale events, and performance reviews
            </li>
            <li>
              Technical Writing – Ability to efficiently produce concise, organized proposals,
              white papers, reports, and software documentation/guides. Worked on custom Pandoc
              scripts for generating PDF/HTML documentation in Markdown. Completed DoD Elevated
              Level of Assurance (ELA) Level II Training. Created and presented Technical
              Writing Lunch and Learn to AIS on Technical Writing.
            </li>
            <li>
              Public Speaking – Perform critical demonstrations across the country for decision
              making parties
            </li>
          </ul>
          <Typography className={classes.resumeBold}>EDUCATION</Typography>
          <hr />
          <p>Drexel University – M.S. Computer Science – December 2013</p>
          <p>
            Clarkson University – B.S. Computer Science, Mathematics; Minor: Business – May 2010
          </p>
          <Typography className={classes.resumeBold}>OTHER EXPERIENCE</Typography>
          <hr />
          <p>Clarkson Writing Center – Potsdam, NY – August 2007 – May 2010</p>
          <ul><li>Tutor that helped students with writing assignments</li></ul>
          <p>Eastman Kodak Company – Rochester, NY – May 2007 – August 2008</p>
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
