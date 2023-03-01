import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <div key={index} className="conhr">
          <div className={`accordion ${activeIndex === index ? 'active' : ''}`}>
            <span className="title">{section.title}</span>
            {activeIndex === index ? (
              ''
            ) : (
              <RemoveIcon
                style={{ float: 'right', justifyContent: 'cente' }}
                onClick={() => handleClick(index)}
              />
            )}
          </div>
          <div
            className="panel"
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            {section.content}
          </div>
          {index !== sections.length - 1 && <hr style={{ maxWidth: '116%' }} />}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  sections: PropTypes.array,
};
