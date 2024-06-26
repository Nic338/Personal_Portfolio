import { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Dialog, DialogContent, DialogContentText, Grid, Icon, IconButton, Link, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import { Book, Menu } from '@mui/icons-material'
import Backdrop from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookImage from './img/blank-book.png'
import { getProjects } from './dataAccess';

export const App = () => {

  const [showIndex, setShowIndex] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [projects, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    getProjects()
      .then((projectsArray) => setProject(projectsArray))
  }, [])

  const handleOpenBook = (projectId) => {
    const selectedProject = projects.find(project => project.id === projectId)
    if (selectedProject) {
      setOpenBook(true);
      setSelectedProject(selectedProject);
    }
  }
  const handleCloseBook = () => {
    setOpenBook(false);
    setSelectedProject(null);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='relative'>
          <Toolbar sx={{ background: '#475841' }}>
            <Grid>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}>
                <Menu sx={{ color: '#E6E8E6' }} />
              </IconButton>
            </Grid>
            <Grid container justifyContent='flex-end'>
              <Link color="inherit" underline='hover' target='_blank' rel='noopener noreferrer' href='https://github.com/Nic338'>
                <GitHubIcon sx={{ marginRight: 2 }} fontSize='large' />
              </Link>
              <Link color="inherit" underline='hover' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/nic-myers/'>
                <LinkedInIcon sx={{ marginRight: 1 }} fontSize='large' />
              </Link>
            </Grid>
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
        <Typography className='projectsDisclaimer projectsHeader' variant='subtitle1'>
          Click a book on the bookshelf to check out one of my projects, or click the index button to see the list of projects instead
          <Button className='indexButton' sx={{
            marginLeft: 10,
            color: '#E6E8E6',
            textShadow: '2 2 2 4 black'
          }} onClick={() => setShowIndex(!showIndex)}>Index</Button>
        </Typography>
        {!showIndex ?
          <div className='bookshelfBackground'>
            <Tooltip title='Legend Lore' placement='top-start'>
              <div className='book legendLoreBook' onClick={() => {handleOpenBook(1)}}></div>
            </Tooltip>
            <Tooltip title='Pop-Up Magic Shop' placement='top-start'>
              <div className='book magicShopBook' onClick={() => {handleOpenBook(2)}}></div>
            </Tooltip>
          </div>
          :
          <>
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
          </>}
        
          <Dialog
            className='bookDialogBox'
            maxWidth='true'
            open={openBook}
            onClose={handleCloseBook}
            sx={{ backgroundImage: { BookImage } }}
          >
            <DialogContent className='bookDialog'>
              <DialogContentText className='bookText'>
                {selectedProject && selectedProject.description}
              </DialogContentText>
            </DialogContent>
          </Dialog>
      </Container>
      <footer>Image by <a href="https://www.freepik.com/free-vector/hand-drawn-shelves-full-books_847565.htm#query=bookshelf%20png&position=47&from_view=keyword&track=ais&uuid=66c3b4c7-22c2-4dbf-b544-065d9c8bd58d">Freepik</a></footer>
    </>
  );
}

