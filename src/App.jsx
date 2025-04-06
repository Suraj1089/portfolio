import {
  Box
} from '@mui/material';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Resume from './components/Resume';


function App() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      {(tabValue === 0 ||
        tabValue === 1) && (
          <Box
            sx={{
              p: 4,
              maxWidth: 700,
              mx: 'auto',
              mt: 5,
              overflowY: 'scroll',
              overflowX: 'hidden',
            }}
          >
            <NavBar tabValue={tabValue} setTabValue={setTabValue} />
            {tabValue === 0 && <About tabValue={0} />}
            {tabValue === 1 && <BlogList />}
          </Box>
        )}
      {tabValue === 2 && (
        <div className="container">
          <div className="left">
            <Profile setTabValue={setTabValue} />
          </div>
          <div className="right">
            <Resume />
          </div>
          </div>
      )}
    </>
  );
}

export default App;
