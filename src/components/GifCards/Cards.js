import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Popup from "../Popup/Popup";

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
    axios.get(process.env.REACT_APP_APIURL+"data/").then((response) => {
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
            <Popup selectData={selectData} setSelectData={setSelectData}   />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Cards;
