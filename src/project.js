import { Card, CardContent, CardHeader, CardMedia, Link, Tooltip, Typography } from '@mui/material'
import './App.css';
import { useEffect, useState } from 'react';
import { getProjects } from './dataAccess';

// export const Project = ({ showIndex, handleOpenBook }) => {

//   const [projects, setProject] = useState([]);

//   useEffect(() => {
//     getProjects()
//       .then((projectsArray) => setProject(projectsArray))
//   }, [])


//   return (
//     <div>
//       {!showIndex ? (
//         <div className='bookshelfBackground'>
//           <Tooltip title='Legend Lore' placement='top-start'>
//             <div className='book legendLoreBook' onClick={handleOpenBook}></div>
//           </Tooltip>
//           <Tooltip title='Pop-Up Magic Shop' placement='top-start'>
//             <div className='book magicShopBook' onClick={handleOpenBook}></div>
//           </Tooltip>
//         </div>
//      ) : (
//         <div>
//           {projects.map((project) => (
//             <Card className='projectCard' key={project.id}>
//               <Link underline='hover' color='inherit' target='_blank' rel='noopener noreferrer' href={project.gitHubLink}>
//                 <CardHeader
//                   title={project.name}
//                   subheader={project.subHeader}
//                 />
//               </Link>
//               <CardMedia
//                 component='img'
//                 height='250'
//                 image={project.image}
//                 alt={project.altTextForImage}
//               />
//               <CardContent>
//                 <Typography variant='body2'>
//                   {project.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         )}
//     </div>
//   );
// }