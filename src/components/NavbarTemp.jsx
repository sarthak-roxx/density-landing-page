import { Box, Typography, Button, IconButton, Slide } from '@mui/material';
import densityLogo from 'C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\assets\\Union.svg';
// import bg from "C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\assets\\bg.svg";
// import heading from "C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\assets\\Heading.svg";
// import pc from "C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\assets\\PC.svg";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import { useMediaQuery } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';

export default function NavbarTemp() {
  const containerRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const isLarge = useMediaQuery('(min-width:1075px)');
  return (
    <>
      <Box
        width="100%"
        backgroundColor="#1f1f24"
        position="fixed"
        top="0"
        left="0"
        height="30vh"
      >
        <Box
          width="95%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: '1000px',
            }}
          >
            <img src={densityLogo} style={{ display: 'inline-block' }} />
          </div>

          {isLarge ? (
            <>
              <Box
                sx={{
                  display: 'flex',
                  padding: '0',
                  gap: '33px',
                  '& .MuiTypography-root': {
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    color: '#D8D8D8',
                    '&:hover': {
                      cursor: 'pointer',
                      color: '#E2FF6F',
                    },
                  },
                }}
              >
                <Typography>About Us</Typography>
                <Typography>Community</Typography>
                <Typography
                  sx={{
                    '& .blog-link': {
                      textDecoration: 'none',
                      color: 'inherit',
                    },
                    '& .blog-link:active': {
                      color: 'inherit',
                    },
                    '& .blog-link:focus': {
                      color: 'inherit',
                    },
                    '& .blog-link:hover': {
                      color: 'inherit',
                    },
                  }}
                >
                  <a
                    href="https://blogs.density.exchange/"
                    target="_blank"
                    rel="noreferrer"
                    className="blog-link"
                  >
                    Blog
                  </a>
                </Typography>
                <Typography>FAQs</Typography>
                <Typography>Support</Typography>
              </Box>

              <Box
                sx={{
                  width: '329.93px',
                  height: '54px',
                  display: 'flex',
                  alignItems: 'center',
                  // gap: '40px',
                  justifyContent: 'space-between',
                }}
              >
                {' '}
                <a
                  href="https://app.density.exchange/"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    sx={{
                      width: '160.93px',
                      height: '54px',
                      background: '#E2FF6F',
                      color: '#000000',
                      lineHeight: '18px',
                      borderRadius: '2px',
                      '&:hover': {
                        background: '#E2FF6F',
                        color: '#000000',
                      },
                      fontWeight: '700',
                      fontSize: '16px',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'space-around',
                    }}
                  >
                    TRADE NOW
                    <EastIcon color="#1f1f24" />
                  </Button>
                </a>
                <IconButton
                  sx={{
                    width: '129px',
                    height: '54px',
                    display: 'flex',
                    gap: '15px',
                    background:
                      'linear-gradient(180deg, #6E762B 0%, rgba(110, 118, 43, 0) 100%)',
                    color: '#000000',
                    lineHeight: '18px',
                    borderRadius: '2px',
                  }}
                >
                  <AndroidIcon sx={{ color: 'white' }} />
                  <AppleIcon sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <IconButton onClick={() => setChecked(true)}>
                <MenuSharpIcon
                  sx={{
                    fontSize: '40px',
                    color: '#E2FF6F',
                  }}
                />
              </IconButton>

              {/* Modal */}
              <Slide
                direction="left"
                in={checked}
                container={containerRef.current}
                timeout={650}
              >
                <Box
                  position="fixed"
                  right="0"
                  bottom="0"
                  width="max(375px, 30%)"
                  height="100%"
                  backgroundColor="#1f1f24"
                >
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => setChecked((prev) => !prev)}>
                      <CloseIcon
                        sx={{
                          color: '#E2FF6F',
                          fontSize: '30px',
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      '& .MuiTypography-root': {
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>Home</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>About Us</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>Community</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>Blog</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>FAQs</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>Support</Typography>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
