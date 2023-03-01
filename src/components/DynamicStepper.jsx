import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export default function DynamicStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((currentStep) => currentStep + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container1">
      <div className={`step ${currentStep >= 0 ? 'active' : ''}`}>
        <div className="one">
          <Box
            sx={{
              position: 'relative',
              mt: 2,
              width: 75.83,
              height: 74.4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2FF6F',
              borderRadius: 2,
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              zIndex: 1,

              '&::after': {
                content: '""',
                position: 'absolute',
                width: '27.65px',
                height: '26.99px',
                top: -32,
                left: 48,

                borderRadius: 2,
                backgroundColor: '#E2FF6F',
                transform: 'translate(50%, 50%) rotate(90deg)',
                zIndex: -1,
              },
            }}
          />{' '}
        </div>
        <div className="contd">
          <h1 className="subdy"> Create Account </h1>
          <span className="subo">Lorem ipsum dolor sit amet consecte</span>
        </div>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="dot">
          <svg
            width="14"
            height="85"
            viewBox="0 0 14 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_247_33482)">
              <line
                x1="6.57812"
                y1="0.520508"
                x2="6.57812"
                y2="76.0961"
                stroke="#8DA737"
                strokeWidth="5"
                strokeDasharray="5 5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_247_33482"
                x="0.078125"
                y="0.520508"
                width="13"
                height="83.5752"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_247_33482"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_247_33482"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="one">
          <Box
            sx={{
              position: 'relative',
              width: 75.83,
              height: 74.4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2FF6F',
              borderRadius: 2,
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              zIndex: 1,

              '&::after': {
                content: '""',
                position: 'absolute',
                width: '27.65px',
                height: '26.99px',
                top: -32,
                left: 48,

                borderRadius: 2,
                backgroundColor: '#E2FF6F',
                transform: 'translate(50%, 50%) rotate(90deg)',
                zIndex: -1,
              },
            }}
          />{' '}
        </div>
        <div className="contd">
          <h1 className="subdy"> Create Account </h1>
          <span className="subo">Lorem ipsum dolor sit amet consecte</span>
        </div>
      </div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="dot">
          <svg
            width="14"
            height="85"
            viewBox="0 0 14 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_247_33482)">
              <line
                x1="6.57812"
                y1="0.520508"
                x2="6.57812"
                y2="76.0961"
                stroke="#8DA737"
                strokeWidth="5"
                strokeDasharray="5 5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_247_33482"
                x="0.078125"
                y="0.520508"
                width="13"
                height="83.5752"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_247_33482"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_247_33482"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
        <div className="one">
          <Box
            sx={{
              position: 'relative',

              width: 75.83,
              height: 74.4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2FF6F',
              borderRadius: 2,
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              zIndex: 1,

              '&::after': {
                content: '""',
                position: 'absolute',
                width: '27.65px',
                height: '26.99px',
                top: -32,
                left: 48,

                borderRadius: 2,
                backgroundColor: '#E2FF6F',
                transform: 'translate(50%, 50%) rotate(90deg)',
                zIndex: -1,
              },
            }}
          />{' '}
        </div>
        <div className="contd">
          <h1 className="subdy"> Create Account </h1>
          <span className="subo">Lorem ipsum dolor sit amet consecte</span>
        </div>
      </div>
      <div className={`step ${currentStep >= 5 ? 'active' : ''}`}>
        <div className="dot">
          <svg
            width="14"
            height="85"
            viewBox="0 0 14 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_247_33482)">
              <line
                x1="6.57812"
                y1="0.520508"
                x2="6.57812"
                y2="76.0961"
                stroke="#8DA737"
                strokeWidth="5"
                strokeDasharray="5 5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_247_33482"
                x="0.078125"
                y="0.520508"
                width="13"
                height="83.5752"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_247_33482"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_247_33482"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={`step ${currentStep >= 6 ? 'active' : ''}`}>
        <div className="one">
          <Box
            sx={{
              position: 'relative',

              width: 75.83,
              height: 74.4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2FF6F',
              borderRadius: 2,
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              zIndex: 1,

              '&::after': {
                content: '""',
                position: 'absolute',
                width: '27.65px',
                height: '26.99px',
                top: -32,
                left: 48,

                borderRadius: 2,
                backgroundColor: '#E2FF6F',
                transform: 'translate(50%, 50%) rotate(90deg)',
                zIndex: -1,
              },
            }}
          />{' '}
        </div>
        <div className="contd">
          <h1 className="subdy"> Create Account </h1>
          <span className="subo">Lorem ipsum dolor sit amet consecte</span>
        </div>
      </div>
      <div className="btn">
        <Button
          sx={{
            color: '#000000',
            display: 'flex',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: 18,
            mt: 6,
            padding: '24px 36px',
            width: 431,
            '&:hover': {
              background: '#E2FF6F',
            },
            height: 66,
            background: '#E2FF6F',
          }}
          href="https://app.density.exchange/"
        >
          Sign Up Now
        </Button>
      </div>
    </div>
  );
}
