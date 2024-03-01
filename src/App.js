import logo from './logo.svg';
import './App.css';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <>
    <Typography className='header' variant='h2' align='left' marginTop={10} marginLeft={15}>
      Hi, I'm Nic. Welcome to my site.
    </Typography>
    <Container className="aboutMe" maxWidth="sm" sx={{ marginTop: 6}}>
    <Typography variant='body1'>
      I'm a junior full stack developer new to the world of tech. I've spent the last decade or so in the retail business developing skills in team building and customer service. In 2023 I took an exciting leap into a new career path with the help of a software development program available to people here in my home state of West Virginia called NewForce. This site is dedicated to showing you some of the work I've accomplished, as well as a way for anyone to contact me with any questions.
    </Typography>
    </Container>
    </>
  );
}

export default App;
