import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Experience from './Experience';
export default function Profile() {
const [favouriteIconColor, setFavouriteIconColor] = React.useState('disabled');

return (
    <Card sx={{ maxWidth: 345, marginBottom: 65 }}>
        <CardHeader
            avatar={
                <Avatar src='src/assets/Suraj_Pisal_Image.jpeg' sx={{ width: 56, height: 56 }}>
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Suraj Pisal</Typography>
            }
            subheader= {
                <Typography variant="caption">Associate software Engineer at Ridecell</Typography>
            }
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: -3 }}>
            I am a backend developer 🖥️, as you might have guessed from my portfolio. 😊 Usually I code in Python. Apart from that I have worked on golang and javascript. In free time I experiment with new technologies and frameworks.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => setFavouriteIconColor(favouriteIconColor === 'disabled' ? 'error' : 'disabled')}>
                <FavoriteIcon color={favouriteIconColor} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <IconButton aria-label="linkedin" style={{color: "#337eff"}} onClick={() => window.open('https://www.linkedin.com/in/surajpisal', '_blank')}>
                <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton aria-label="github" onClick={() => window.open('https://github.com/Suraj1089', '_blank')}>
                <FontAwesomeIcon icon={faGithub} style={{color: "#0c1422",}}/>
            </IconButton>
            <IconButton aria-label="file" onClick={() => window.open('https://github.com/Suraj1089', '_blank')}>
                <FontAwesomeIcon icon={faFile} />
            </IconButton>
            <IconButton aria-label="x" onClick={() => window.open('https://github.com/Suraj1089', '_blank')}>
            <FontAwesomeIcon icon={faXTwitter} style={{color: "#000000",}} />
            </IconButton>
            <Experience />
        </CardActions>
    </Card>
);
}
