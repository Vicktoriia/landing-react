import emailjs from '@emailjs/browser';
import { useState } from 'react';

import React from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};
export const Contact = props => {
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
                <p>Переглянути колекцію</p>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2>Зробити замовлення</h2>
                <p>{props.data ? props.data.order : 'loading'}</p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Ім'я"
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
                        placeholder="Email"
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
                    placeholder="Повідомлення"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Надіслати
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Або за телефоном</h3>
            </div>
            <div className="contact-item">
              <a href={props.data ? props.data.phone : 'loading'}>
                <i className="fa fa-phone"></i>+38 050 5 997 55 9
              </a>
              <br />
              <a href={props.data ? props.data.phone2 : 'loading'}>
                <i className="fa fa-phone"></i>+38 098 77 22 3 44
              </a>
            </div>
            <ul className="message">
              <li className="message-item">
                <a href={props.data ? props.data.whatsapp : '/'}>
                  <i className="fa fa-whatsapp fa-message"></i>
                </a>
              </li>
              <li className="message-item">
                <a href={props.data ? props.data.viber : '/'}>
                  <i className="fa fa-brands fa-viber fa-message"></i>
                </a>
              </li>
              <li className="message-item">
                <a href={props.data ? props.data.telegram : '/'}>
                  <i className="fa fa-telegram fa-message"></i>
                </a>
              </li>
            </ul>
            <div className="contact-item">
              <a href={props.data ? props.data.email : 'loading'}>
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
