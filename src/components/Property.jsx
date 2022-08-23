import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { images } from "_constants";

function Property(props) {
  return (
    <div className="mb-3 rounded-6 shadow bg-white properties-list">
      <div className="row m-0">
        <div className="col-4 p-0">
          <div className="property-img relative">
            <div className="bookbark">
              <img src={images.bookmark} alt="bookmark" />
            </div>
            <div className="compare-btn">
              <span className="btn btn-light rounded-5">Compare</span>
            </div>
            <img src={images.img} alt="img" />
          </div>
        </div>
        <div className="col-8 p-0">
          <div className="p-3 property-dtls">
            <div className="d-flex align-items-start">
              <span className="badge bg-success">8.2</span>
              <h3>
                <Link to="/properties/details">
                  #2 Best Value for Business Perfect for your Business
                </Link>
              </h3>
            </div>
            <address>
              <p>
                JPM Mall
                <br />
                Sector 12, Gurgoan
              </p>
              <p>Type: Mall</p>
              <p>Carpet Area: 3000 ft2</p>
              <p>Rent: ₹ 15,000/month (₹1500/sqft)</p>
            </address>
          </div>
        </div>
      </div>
      <div className="properties-carousel p-3">
        <h3>Factors that you should consider:</h3>
        <div className="owl-carousel owl-theme property-carousel">
          <div className="item p-2 rounded-4 shadow bg-white text-center">
            <img src={images.winner} alt="winner" />
            <h4>Competition</h4>
            <h5 className="text-success">HIGH</h5>
            <p>4 restaurants/1000 people</p>
          </div>
          <div className="item p-2 rounded-4 shadow bg-white text-center">
            <img src={images.ion_footsteps} alt="ion_footsteps" />
            <h4>Footfalls</h4>
            <h5 className="text-warning">MEDIUM</h5>
            <p>100 people/day (150m radius)</p>
          </div>
          <div className="item p-2 rounded-4 shadow bg-white text-center">
            <img src={images.fluent_people} alt="fluent_people" />
            <h4>Population</h4>
            <h5 className="text-danger">LOW</h5>
            <p>1000 people (1km radius)</p>
          </div>
          <div className="item p-2 rounded-4 shadow bg-white text-center">
            <img src={images.ic_outline} alt="ic_outline" />
            <h4>Market Presence</h4>
            <h5 className="text-success">HIGH</h5>
            <p>10 Shops in JPM Mall</p>
          </div>
          <div className="item p-2 rounded-4 shadow bg-white text-center">
            <img src={images.wallet} alt="wallet" />
            <h4>Income</h4>
            <h5 className="text-danger">LOW</h5>
            <p>₹40,000/person (1km radius)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Property.propTypes = {
  title: PropTypes.string,
};

export default memo(Property);
