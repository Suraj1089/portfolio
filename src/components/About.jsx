import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Link as MuiLink, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function About({ tabValue }) {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 700,
        mx: 'auto',
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      {/* <NavBar /> */}

      {/* Main content area with fixed width and overflow prevention */}
      <Box sx={{ width: '100%', minHeight: '300px' }}>
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Hi there! 👋
            </Typography>
            <Typography variant="body1">
              I am <strong>Suraj</strong>, a Full stack software engineer who
              loves building scalable web apps with Python, JavaScript, and
              React. I enjoy writing clean, easy-to-understand code that is
              simple to maintain.
            </Typography>
            <p></p>
            <Typography variant="body1">
              Currently I am a Software Engineer at{' '}
              <MuiLink
                href="https://ridecell.com/"
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ color: 'green', fontWeight: 'bold' }}
              >
                Ridecell
              </MuiLink>{' '}
              where I am working on fleet management and Carsharing solutions.
            </Typography>
            <p></p>
            <Typography variant="body1">
            I like keeping things simple.
            </Typography>
            <p></p>
            <Typography variant="body1">
               Most days you will find me either
              writing code or out somewhere traveling.
            </Typography>

            <Typography variant="body1" sx={{ mt: 3, fontWeight: 500 }}>
              You can connect with me at --
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
      </Box>
    </Box>
  );
}

About.propTypes = {
  tabValue: PropTypes.number,
  setTabValue: PropTypes.func,
};
