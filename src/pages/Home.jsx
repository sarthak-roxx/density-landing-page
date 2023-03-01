import { Box, Typography } from '@mui/material';
import Carousel2 from '../components/Carousel2';
// import { DynStepper } from '../components/DynStepper';
import Faq from '../components/Faq';
import Hero from 'C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\assets\\Content Sections V16.png';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          marginTop: '99px',
          marginBottom: '200px',
          width: '100%',
          height: 'auto',
          background: '#FFFFFF',
        }}
      >
        <figure style={{ width: '100%' }}>
          <img className="hero-img" src={Hero} alt="Hero image" />
        </figure>
      </Box>

      {/* <DynStepper /> */}
      <Box
        sx={{
          '& .MuiTypography-root': {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '4vh',
            lineHeight: '18px',
            textAlign: 'center',
            color: '#000000',
          },
        }}
      >
        <Typography sx={{ mb: '100px' }}>Testimonials</Typography>
        <Carousel2 />
        {/* <DynStepper /> */}
        <Faq />
      </Box>
    </>
  );
}
