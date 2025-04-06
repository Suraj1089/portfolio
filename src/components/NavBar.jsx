import { Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function NavBar({ tabValue, setTabValue }) {
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      {tabValue === 0 && (
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Suraj Pisal
        </Typography>
      )}
      {tabValue === 1 && (
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Blogs
        </Typography>
      )}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          mb: 3,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tab label="About" />
        <Tab label="Blogs" />
        <Tab label="Resume" />
      </Tabs>
    </>
  );
}

NavBar.propTypes = {
  tabValue: PropTypes.number,
  setTabValue: PropTypes.func,
};
