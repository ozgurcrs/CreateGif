import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Card(props) {
  const { memesGif, title,onClick } = props;
  return (

      <div className="card" onClick={() => {onClick()}} >
        <div className="top">
          <img src={memesGif} alt="" />
        </div>
        <div className="bottom">
          <h1>
            <i className="fab fa-studiovinari"></i> {title}
          </h1>
          <div className="interaction">
            <button>
              <i className="fas fa-dove"></i>
            </button>
            <button>
              <i className="far fa-heart"></i>
            </button>
            <button>
              <i className="far fa-comments"></i>
              <span>1</span>
            </button>
          </div>
        </div>
      </div>
  );
}

Card.propTypes = {
  memesGif: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
};

export default Card;
