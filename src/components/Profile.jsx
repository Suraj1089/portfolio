import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Profile({ setTabValue }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favStatus = localStorage.getItem('isFavorite') === 'true';
    setIsFavorite(favStatus);
  }, []);

  const handleFavoriteClick = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    localStorage.setItem('isFavorite', newStatus);
  };

  const handleLinkClick = (event) => {
    const text = event.target.innerText;
    if (text === 'About') {
      setTabValue(0);
    } else if (text === 'Blogs') {
      setTabValue(1);
    }
  };

  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar
          src="/Suraj_Pisal_Image.jpeg"
          sx={{ '--Avatar-size': '4rem' }}
        />
        <Typography level="title-lg">Suraj Pisal</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Associate Software Engineer @Ridecell | Python, Django, FastAPI |
          Experimenting with Ai LLM models
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
          <a href="https://linkedin.com/in/surajpisal" target="_blank">
            <FontAwesomeIcon
              size="xl"
              icon={faLinkedin}
              style={{ color: '#004bcc' }}
            />
          </a>
          <a href="https://github.com/Suraj1089" target="_blank">
            <FontAwesomeIcon
              size="xl"
              icon={faGithub}
              style={{ color: '#001538' }}
            />
          </a>
          <a href="https://x.com/_surajpisal" target="_blank">
            <FontAwesomeIcon
              size="xl"
              icon={faTwitter}
              style={{ color: '#1da1f2' }}
            />
          </a>
        </Box>
        {/* bok with center alignment */}
        <Box
          sx={{ mt: 2, textAlign: 'center', cursor: 'pointer' }}
          onClick={handleFavoriteClick}
        >
          {/* <Favorite sx={{ color: isFavorite ? 'red' : 'gray' }} /> */}
          <Typography level="body-xs"></Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Link underline="hover" onClick={handleLinkClick}>
            About
          </Link>
          <Link underline="hover" onClick={handleLinkClick}>
            Blogs
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}

Profile.propTypes = {
  setTabValue: PropTypes.func,
};
