import DynamicStepper from './DynamicStepper';
import stepperImg from 'C:\\Users\\msi\\Documents\\Density-landing-revamp\\src\\utils\\cryptimg.svg';
import '../utils/ds.css';
export function DynStepper() {
  return (
    <>
      <div className="stepper-app">
        <div className="container">
          <div className="cont">
            <h1 className="head">Get Started With Density</h1>

            <p className="headp">
              Lorem ipsum dolor sit amet consectetur. Mauris at arcu lacinia
              consectetur nunc.{' '}
            </p>
            <div className="stepper">
              <DynamicStepper />
            </div>
          </div>
          <div className="imagec">
            <div className="imageback"></div>
            <img src={stepperImg} />
          </div>
        </div>
      </div>
    </>
  );
}
