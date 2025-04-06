import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Blog from './Blog';
import CircularLoader from './CircularLoader';

export default function BlogList() {
  const [isLoading, setIsloading] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [showSelectedBlog, setShowSelectedBlog] = useState(false);
  useEffect(() => {
    setIsloading(true);
    try {
      const fetchGithubGists = async () => {
        const response = await fetch(
          'https://api.github.com/users/Suraj1089/gists'
        );
        if (!response.ok) {
          setBlogs(null);
          setIsloading(true);
          return;
        }
        const data = await response.json();
        setBlogs(data);
        setIsloading(false);
      };
      fetchGithubGists();
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  }, []);

  const showBlogs = (blog) => {
    const data = Object.values(blog.files)[0];
    setBlogData({
      id: blog.id,
      data: data,
      url: data.raw_url,
      updatedAt: blog.updated_at,
      description: blog.description,
    });
    setShowSelectedBlog(true);
  };
  return (
    <List sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}>
      {isLoading && <CircularLoader />}
      {!isLoading && !blogs && <Typography>Error in fetching blogs.</Typography>}
      {!showSelectedBlog &&
        blogs &&
        blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            <ListItem onClick={() => showBlogs(blog)} alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    sx={{
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      fontWeight: 'medium',
                      color: 'primary.main', // Optional: makes it look more like a clickable link
                    }}
                  >
                    {blog.description}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      last updated -{' '}
                      {moment(blog.updated_at).format('MMM Do YYYY')}
                    </Typography>
                    {blog.summary}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      {showSelectedBlog && blogData && (
        <Blog
          id={blogData.id}
          url={blogData.url}
          title={blogData.description}
          lastUpdatedAt={blogData.updatedAt}
          setShowSelectedBlog={setShowSelectedBlog}
        />
      )}
    </List>
  );
}
