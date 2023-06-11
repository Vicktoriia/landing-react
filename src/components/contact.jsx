import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import React from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};
 const Contact = () => {
  const { t } = useTranslation();
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        'service_43b37zi',
        'template_j28w7zu',
        e.target,
        'X1FD3pkgpfcowgz27'
      )
      .then(
        result => {
          console.log(result.text);
          clearState();
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <p>{t('Contact.text')}</p>
                <ul>
                  <li>
                    <a href={t('Contact.facebook')}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={t('Contact.instagram')}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="contact-section-title">
                <h2 className='text-center'>{t('Contact.title')}</h2>
                <p className='text-center'>{t('Contact.order')}</p>
              </div>
              <form
                name="sentMessage"
                className="form"
                validate="true"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={t('Contact.namePlaceholder')}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder={t('Contact.emailPlaceholder')}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder={t('Contact.messagePlaceholder')}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {t('Contact.button')}
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-12 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{t('Contact.phoneText')}</h3>
            </div>
            <div className="contact-item">
              <a href={t('Contact.phone')}>
                <i className="fa fa-phone"></i>+38 050 5 997 55 9
              </a>
              <br />
              <a href={t('Contact.phone2')}>
                <i className="fa fa-phone"></i>+38 098 77 22 3 44
              </a>
            </div>
            <ul className="message">
              <li className="message-item">
                <a href={t('Contact.whatsapp')}>
                  <i className="fa fa-whatsapp fa-message"></i>
                </a>
              </li>
              <li className="message-item">
                <a href={t('Contact.viber')}>
                  <i className="fa fa-brands fa-viber fa-message"></i>
                </a>
              </li>
              <li className="message-item">
                <a href={t('Contact.telegram')}>
                  <i className="fa fa-telegram fa-message"></i>
                </a>
              </li>
            </ul>
            <div className="contact-item">
              <a href={t('Contact.email')}>
                <i className="fa fa-envelope"></i>the.vitrylo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 React Land Page Template. Design by{' '}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
