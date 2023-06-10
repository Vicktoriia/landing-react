import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function LernButton(props) {
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
          {props.data && props.data.Button ? props.data.Button.text : 'loading'}</div>
      </Collapse>
    </>
  );
}

  export default LernButton;
