import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Material UI imports
import { Alert, Box, Divider, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircularLoader from './CircularLoader';

// Styled components using Material UI
const CodeBlock = styled('code')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: '2px 4px',
  borderRadius: theme.shape.borderRadius,
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
}));

const BlogContent = styled(Box)(({ theme }) => ({
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.grey[300]}`,
    paddingLeft: theme.spacing(2),
    fontStyle: 'italic',
    margin: theme.spacing(2, 0),
  },
  '& table': {
    borderCollapse: 'collapse',
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  '& th, & td': {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1),
  },
  '& th': {
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function Blog({
  id,
  url,
  title,
  lastUpdatedAt,
  setShowSelectedBlog,
}) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch content: ${res.status}`);
        }
        return res.text();
      })
      .then((data) => {
        setLoading(false);
        setContent(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    } catch (error) {
      setError('Error in loading blog data')
    }
  }, [url]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <CodeBlock {...props}>{children}</CodeBlock>
      );
    },
    h1: (props) => <Typography variant="h4" gutterBottom {...props} />,
    h2: (props) => (
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }} {...props} />
    ),
    h3: (props) => (
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }} {...props} />
    ),
    h4: (props) => (
      <Typography
        variant="subtitle1"
        gutterBottom
        fontWeight="bold"
        {...props}
      />
    ),
    p: (props) => <Typography variant="body1" paragraph {...props} />,
    ul: (props) => <Box component="ul" sx={{ pl: 2 }} {...props} />,
    ol: (props) => <Box component="ol" sx={{ pl: 2 }} {...props} />,
    li: (props) => <Box component="li" sx={{ mb: 0.5 }} {...props} />,
    img: ({ src, alt }) => (
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          my: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      />
    ),
  };

  const handleBack = () => {
    setShowSelectedBlog(false);
  };

  return (
    <>
      {loading && <CircularLoader />}
      {!loading && content !== '' && (
        <>
          <Box width="100%" maxWidth="100%">
            <Box mb={2}>
              <Box display="flex" alignItems="center" color="primary.main">
                <Typography variant="subtitle1" component="span" sx={{ mx: 1 }}>
                  <Link
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        cursor: 'pointer',
                        color: 'primary.main',
                      },
                    }}
                    onClick={handleBack}
                  >
                    Blogs
                  </Link>
                </Typography>
                <KeyboardDoubleArrowRightIcon />
                <Typography variant="subtitle1" component="span" sx={{ mx: 1 }}>
                  {title}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
            </Box>

            {loading && (
              <Box py={4} display="flex" flexDirection="column" gap={2}>
                <Skeleton variant="text" width="75%" height={28} />
                <Skeleton variant="text" width="100%" height={28} />
                <Skeleton variant="text" width="85%" height={28} />
                <Skeleton variant="rectangular" width="100%" height={100} />
                <Skeleton variant="text" width="70%" height={28} />
              </Box>
            )}

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  Error loading content
                </Typography>
                <Typography variant="body2">{error}</Typography>
              </Alert>
            )}

            {!loading && !error && (
              <BlogContent>
                <ReactMarkdown
                  components={components}
                  rehypePlugins={[rehypeRaw]}
                >
                  {content}
                </ReactMarkdown>
              </BlogContent>
            )}
          </Box>
          <Button variant="outlined" onClick={handleBack} sx={{ mb: 2 }}>
            ← Back to All blogs
          </Button>
        </>
      )}
    </>
  );
}

Blog.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  lastUpdatedAt: PropTypes.any,
  setShowSelectedBlog: PropTypes.func,
};
