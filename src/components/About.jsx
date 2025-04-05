import React from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';

export default function About({setShowResume, setShowAbout}) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue == 2) {
        setShowResume(true)
        setShowAbout(false)
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Suraj Pisal
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="About" />
        <Tab label="Posts" disabled/>
        <Tab label="Resume" />
      </Tabs>

      {tabValue === 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Hi there! 👋
          </Typography>
          <Typography variant="body1" paragraph>
            I am <strong>Suraj</strong>, a full Stack Software Engineer
            who loves building scalable web apps with Python, JavaScript, and
            React. I enjoy writing clean, easy-to-understand code that’s simple
            to maintain.
          </Typography>

          <Typography variant="body1" paragraph>
            Currently I am a Software Engineer at <strong>Ridecell</strong>
          </Typography>

          <Typography variant="body1" paragraph>
            I enjoy simplifying things.
          </Typography>

          <Typography variant="body1" sx={{ mt: 3, fontWeight: 500 }}>
            You can find me at:
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <MuiLink
              href="https://x.com/_surajpisal"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
            >
              <TwitterIcon />
            </MuiLink>
            <MuiLink
              href="https://github.com/Suraj1089"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
            >
              <GitHubIcon />
            </MuiLink>
            <MuiLink
              href="https://linkedin.com/in/surajpisal"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
            >
              <LinkedInIcon />
            </MuiLink>
          </Stack>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          <Typography variant="body1">No posts yet. Stay tuned!</Typography>
        </Box>
      )}
    </Box>
  );
}


About.propTypes = {
    setShowResume: PropTypes.func,
    setShowAbout: PropTypes.func,
}