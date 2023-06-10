import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Size = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
      <Container>
        <button className="btn-back" type="button" onClick={handleBackClick}>
          <i className="fa fa-arrow-left-long mr-2"></i>
        </button>
        <h2 className='text-center'>Таблиця розмірів одягу для чоловіків</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Розмір</th>
                <th>Груди (см)</th>
                <th>Талія (см)</th>
                <th>Стегна (см)</th>
                <th>Зріст (см)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S</td>
                <td>88-94</td>
                <td>74-80</td>
                <td>88-94</td>
                <td>165-170</td>
              </tr>
              <tr>
                <td>M</td>
                <td>95-101</td>
                <td>81-87</td>
                <td>95-101</td>
                <td>170-175</td>
              </tr>
              <tr>
                <td>L</td>
                <td>102-108</td>
                <td>88-94</td>
                <td>102-108</td>
                <td>175-180</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>109-115</td>
                <td>95-101</td>
                <td>109-115</td>
                <td>180-185</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>116-122</td>
                <td>102-108</td>
                <td>116-122</td>
                <td>185-190</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default Size;
