import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useTranslation } from 'react-i18next';

function LernButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn-custom btn btn-lg"
      >
        Learn More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {t('Button.text')}</div>
      </Collapse>
    </>
  );
}

  export default LernButton;
