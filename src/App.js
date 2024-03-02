import { useState } from 'react';
import './App.css';
import { AppBar, Box, Card, CardContent, CardHeader, CardMedia, Container, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material'


export const App = () => {




  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
      <Toolbar sx={{background: '#9FB8AD'}}>
        <IconButton>
          <Menu />
        </IconButton>
      </Toolbar>
      </AppBar>
    </Box>
      <Typography className='header' variant='h1' align='center' marginTop={10}>
        Hi, I'm Nic. Welcome to my site.
      </Typography>
      <Container className="aboutMe" maxWidth="lg">
        <Typography variant='h5'>
          I'm a junior full stack developer new to the world of tech. I've spent the last decade or so in the retail business developing skills in team building and customer service. In 2023 I took an exciting leap into a new career path with the help of a software development program available to people here in my home state of West Virginia called NewForce. This site is dedicated to showing you some of the work I've accomplished, as well as a way for anyone to contact me with any questions.
        </Typography>
      </Container>
      <Container className='projectsContainer'>
        <Typography className='projectsHeader' variant='h5'>
          Here's a few of the projects I've developed:
        </Typography>
        <Card className='projectCard'>
          <Link underline='hover' color='inherit' target='_blank' rel='noopener noreferrer' href="https://github.com/Nic338/Pop-Up-Magic-Shop">
            <CardHeader
              title="Pop-Up Magic Shop"
              subheader="My Front End Capstone Project" />
          </Link>
          <CardMedia
            component="img"
            height='250'
            image={require('../src/img/intro-frontend-ss.png')}
            alt='magic shop front page' />
          <CardContent>
            <Typography variant='body2'>
              My app I built as a tool for the popular table top roleplaying game Dungeons and
              Dragons 5e. Specifically made to help the person running the game generate item
              shops at random based on certain parameters set within the home page of the app
              to use during their sessions. This project was built with React.js and JSON server as
              a mock API, as well an open API source.
            </Typography>
          </CardContent>
        </Card>
        <Card className='projectCard'>
          <Link underline='hover' color='inherit' target='_blank' rel='noopener noreferrer' href='https://github.com/Nic338/LegendLore'>
          <CardHeader
            title="Legend Lore"
            subheader="My Full Stack Capstone Project" />
            </Link>
          <CardMedia
            component='img'
            height='250'
            image={require('../src/img/landingpage-backend-ss.png')}
            alt='legend lore landing page'
          />
          <CardContent>
            <Typography variant='body2'>
              A full stack app built as a tool for the popular table top roleplaying game Dungeons
              and Dragons. Legend Lore is an interactive D&D 5e world building and campaign
              management app for DMs made to help keep your story ideas and thoughts
              organized and easily accessible. This project was built with React.js in the front end
              and C# and TSQL in the back end.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

