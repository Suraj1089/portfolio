import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Blog from './Blog';
import CircularLoader from './CircularLoader';
import Stack from '@mui/material/Stack';

const CATEGORIES = ['All', 'Technical Blogs', 'Personal thougts', 'Travel'];

export default function BlogList() {
  const [isLoading, setIsloading] = useState(false);
  const [allBlogs, setAllBlogs] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [showSelectedBlog, setShowSelectedBlog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // First, fetch all blogs from GitHub
  useEffect(() => {
    setIsloading(true);
    try {
      const fetchGithubGists = async () => {
        const response = await fetch(
          'https://api.github.com/users/Suraj1089/gists'
        );
        if (!response.ok) {
          setAllBlogs(null);
          setFilteredBlogs(null);
          setIsloading(false);
          return;
        }
        const data = await response.json();
        setAllBlogs(data);
        setFilteredBlogs(data); // Initially show all blogs
        setIsloading(false);
      };
      fetchGithubGists();
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    if (!allBlogs) return;

    const filterBlogs = (category) => {
      if (!category) {
        return allBlogs;
      }

      if (typeof category !== 'string') {
        return allBlogs;
      }

      category = category.toLowerCase();

      if (category === 'all') {
        return allBlogs;
      }

      const filteredBlogs = allBlogs.filter((blog) => {
        const blogFileName = Object.keys(blog.files)[0];
        const blogFilesWords = blogFileName.split('_');
        const keyWordToFilter =
          blogFilesWords[blogFilesWords.length - 1].split('.')[0]; // get keyword without file extension
        return (
          blogFileName.toLowerCase().includes(category) ||
          category.includes(keyWordToFilter.toLowerCase()) ||
          blogFilesWords.includes(category)
        );
      });

      return filteredBlogs;
    };

    const newFilteredBlogs = filterBlogs(selectedCategory);
    setFilteredBlogs(newFilteredBlogs);
  }, [selectedCategory, allBlogs]);

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
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          overflowX: 'auto',
          py: 1,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {CATEGORIES.map((category) => (
          <Button
            size="small"
            onClick={() => setSelectedCategory(category)}
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            color={selectedCategory === category ? 'primary' : 'inherit'} // Use 'inherit' instead of 'gray'
            sx={{
              borderRadius: '9999px',
              whiteSpace: 'nowrap', // Prevent text wrapping
              minWidth: 'fit-content', // Ensure buttons don't shrink too much
              fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
              px: { xs: 2, sm: 2 }, // Responsive horizontal padding
              ...(selectedCategory !== category && {
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  bgcolor: 'action.hover', // Subtle hover background
                },
              }),
            }}
          >
            {category}
          </Button>
        ))}
      </Stack>
      <List sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}>
        {isLoading && <CircularLoader />}
        {!isLoading && !filteredBlogs && (
          <Typography>Error in fetching blogs.</Typography>
        )}
        {!showSelectedBlog && filteredBlogs && filteredBlogs.length === 0 && (
          <Stack spacing={2} margin="30px" display="flex">
            <Typography margin="30px" variant="h6" color="textSecondary">
              Oops! No data found for &quot;{selectedCategory}&quot;. 😔
            </Typography>
            <Typography color="textSecondary">
              Stay tuned, I will add the content soon...! ✨
            </Typography>
          </Stack>
        )}
        {!showSelectedBlog &&
          filteredBlogs &&
          filteredBlogs.map((blog) => (
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
                        color: 'primary.main',
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
    </>
  );
}
