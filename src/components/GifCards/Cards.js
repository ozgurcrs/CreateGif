import React from "react";
import Card from "./Card";
import Popup from "../Popup/Popup";

function Cards(props) {
  const {data,setSelectData,selectData,actionCard} = props

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
