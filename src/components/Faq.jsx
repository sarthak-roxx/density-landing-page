import { Typography } from '@mui/material';
import Accordion from './Accordion';

export default function Faq() {
  const sections = [
    {
      title:
        'How secure is your exchange and what measures do you have in place to protect user funds?',
      content:
        'Density uses 256 AWS SHA encryption, with secure storage, and safe multi-signature sign-in authentication to ensure access control and real-time monitoring. We are backed by leading KYC and AML analytics providers like Chainanalysis and Onfido (SOC-2 Type-II meeting the AICPA Standards)',
    },
    {
      title: 'What is Leverage in Trading?',
      content:
        // eslint-disable-next-line quotes
        "Just as a lever multiplies physical force, leverage in trading multiplies the trader's purchasing power, enabling them to take larger positions in the market. On Density, you can use up to 25x leverage to trade your favorite cryptocurrency future.",
    },
    {
      title: 'What are the benefits of futures trading?',
      content:
        'Futures trading allows you to take both long and short positions in the market making it easy for you to profit from the market irrespective of its direction.',
    },
    {
      title: 'How do I get started with trading on Density?',
      content:
        'Get verified in just 30 seconds and start trading with a mere INR 500. Unleash the power of leverage with our 25x multiplier tool. Trade anytime, anywhere with 24/7 access, and never miss a beat with our always-available 24/7 support team',
    },
  ];

  return (
    <div className="faqm">
      <Typography className="heading">Frequently Asked Questions</Typography>
      <div className="pdiv"></div>
      <div className="accord">
        <Accordion sections={sections} />
      </div>
    </div>
  );
}
