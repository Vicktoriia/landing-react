  import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Table = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backLink = location.state?.from ?? '/';
  const handleBackClick = () => navigate(backLink);

  return (
    <main>
      <div>
        <div className="intro intro-size">
          <button className="btn-back" type="button" onClick={handleBackClick}>
            <i className="fa fa-arrow-left-long mr-2"></i>
          </button>
        </div>
        <Container>
          <h2 className="text-center">{props.data ? props.data.title : 'Loading'}</h2>
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>{props.data ? props.data.columns[0] : 'Loading'}</th>
                  <th>{props.data ? props.data.columns[1] : 'Loading'}</th>
                  <th>{props.data ? props.data.columns[2] : 'Loading'}</th>
                  <th>{props.data ? props.data.columns[3] : 'Loading'}</th>
                  <th>{props.data ? props.data.columns[4] : 'Loading'}</th>
                </tr>
              </thead>
              <tbody>
                {props.data && props.data.rows ? (
                  props.data.rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.size}</td>
                      <td>{row.chest}</td>
                      <td>{row.waist}</td>
                      <td>{row.hips}</td>
                      <td>{row.height}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Loading</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Table;
