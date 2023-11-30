import React from 'react';
import "./Card.css"

const Card = () => {
  return (
    <>
        <div className="container-fluid px-5">
          <h2 className="mt-5">Best of Electronics</h2>
          <div className="scrolling-wrapper row flex-row flex-nowrap">
            
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
            <div className="col-3">
              <div className="card card-block"></div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Card;
