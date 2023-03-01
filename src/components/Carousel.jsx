/* eslint-disable react/jsx-key */
import { Card, CardContent } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(-5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(-5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
  <Card
    sx={{
      maxWidth: '275px',
      transform: 'rotate(-5deg)',
      border: '1px solid black',
      marginRight: '25px',
    }}
  >
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque
      omnis soluta nulla consectetur. Vel dicta error sequi, officia in dolorem
      deserunt iure explicabo fugiat
    </CardContent>
  </Card>,
];

export default function Carousel() {
  return (
    <>
      <AliceCarousel
        autoHeight
        autoWidth
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
      />
    </>
  );
}
