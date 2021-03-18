import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

let createStyle;

const actionCard = (id, data, setSelectData) => {
  const selectedData = data.filter((item) => item.id === id);
  createStyle = {
    top: window.scrollY - 25 + "px",
  };
  selectedData.create = createStyle;
  setSelectData(selectedData);
};

function Cards() {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/data/").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <section>
      <div className="content">
        <div className="cards">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                memesGif={item.url}
                id={item.id}
                onClick={() => actionCard(item.id, data, setSelectData)}
                title={item.name}
              />
            );
          })}
          {selectData.length > 0 ? (
            <div
              className="showCard animate__animated animate__fadeInDown"
              style={selectData.create}
            >
              <div className="actionHeader">
                <div className="title">
                  <i className="fas fa-circle-notch"></i>
                  <h3>Drake Hotline Bling</h3>
                </div>
                <div className="close">
                  <button onClick={() => setSelectData([])}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="actionContainer">
                <div className="gifPreview">
                  <img src={selectData[0]?.url} alt="" />
                </div>
                <div className="actionInput">
                  <label htmlFor="textField-1">Text Field 1</label>
                  <input
                    type="text"
                    id="textField-1"
                    placeholder="Text Field"
                  />
                  <label htmlFor="textField-2">Text Field 1</label>
                  <input
                    type="text"
                    id="textField-2"
                    placeholder="Text Field"
                  />
                  <label htmlFor="textField-3">Text Field 1</label>
                  <input
                    type="text"
                    id="textField-3"
                    placeholder="Text Field"
                  />
                </div>
                <div className="action">
                  <button><i class="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Cards;
