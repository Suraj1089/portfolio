import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Favorite from '@mui/icons-material/Favorite';


export default function Profile() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar
          src="/Suraj_Pisal_Image.jpeg"
          sx={{ '--Avatar-size': '4rem' }}
        />
        <Typography level="title-lg">Suraj Pisal</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Software Engineer
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
         {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#00328a",}} /> */}
         <a href="https://linkedin.com/in/surajpisal" target='_blank'>
         <FontAwesomeIcon size='xl' icon={faLinkedin} style={{color: "#004bcc",}} />
         </a>
         <a href="https://github.com/Suraj1089" target='_blank'>
         <FontAwesomeIcon size='xl' icon={faGithub} style={{color: "#001538",}} />
         </a>
         <a href="https://x.com/_surajpisal" target='_blank'>
         <FontAwesomeIcon size='xl' icon={faTwitter} style={{color: "#1da1f2",}} />
         </a>
        </Box>
        {/* bok with center alignment */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Favorite /> <Typography level="body-xs">6.3k</Typography>

        </Box>
      </CardContent>
            
    </Card>
  );
}
