import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/GifCards/Cards";
import Layout from "../Layout/Layout";

const actionCard = (id, data, setSelectData) => {
  let createStyle;
  const selectedData = data.filter((item) => item.id === id);
  createStyle = {
    top: window.scrollY - 25 + "px",
  };
  selectedData.create = createStyle;
  setSelectData(selectedData);
};

function Main() {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_APIURL + "data/").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container">
      <Layout>
        <Cards
          setSelectData={setSelectData}
          selectData={selectData}
          data={data}
          actionCard={actionCard}
        />
      </Layout>
    </div>
  );
}

export default Main;
