import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function LernButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn btn-custom btn-lg"
      >
        Learn More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Vitrylo – це ідея, здатна відштовхнути лише від бажання і рухати вперед, назустріч усім наслідкам! 100% ідей vitrylo – на 100% українські, які реалізовані головою за допомогою рук</div>
      </Collapse>
    </>
  );
}

export default LernButton;
