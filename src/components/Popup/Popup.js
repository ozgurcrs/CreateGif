import React, { useState } from "react";
import axios from "axios";
import Button from "../Custom/Button";
import TextInput from "../Custom/TextInput";
import { useForm } from "react-hook-form";

export default function Popup(props) {
  const { selectData, setSelectData } = props;
  const { register, handleSubmit } = useForm();
  const [publish, setPublish] = useState();



  const saveMeme = () => {
    axios.post("http://localhost:5000/createdMeme",{
      "url":publish,
      "title":selectData[0].name
    }).then(response=> {
      console.log(response);
    });
  }

  const createGif = (data) => {
    let memeInfo = {
      templateID: selectData[0].id,
      inputCount: Object.keys(data).length,
      textFields: data,
    };
    axios
      .post(
        `${process.env.REACT_APP_MEMEURL}caption_image?username=${process.env.REACT_APP_USERNAME}&
          password=${process.env.REACT_APP_PASSWORD}&
          text0=${memeInfo.textFields.TextField1}&
          text1=${memeInfo.textFields.TextField2}&
          template_id=${selectData[0].id}`
      )
      .then((response) => {
        setPublish(response.data.data.url);
      });
  };

  if (publish) {
    return (
      <div
        className="showCard animate__animated animate__fadeInDown"
        style={selectData.create}
      >
        <div className="actionHeader">
          <div className="title">
            <i className="fas fa-circle-notch"></i>
            <h3>{selectData[0]?.name}</h3>
          </div>
          <div className="close">
            <button onClick={() => setSelectData([])}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="actionContainer">
          <div
            className="gifPreview"
            style={publish ? { padding: "20px", width: "50%",marginBottom:"50px" } : null}
          >
            <img
              src={publish}
              alt=""
              style={publish ? { width: "100%" } : null}
            />
          </div>
        </div>
        <div className="action">
          <Button type="Submit" iconClassName="fas fa-save fa-2x" onClick={() => {saveMeme()}} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="showCard animate__animated animate__fadeInDown"
        style={selectData.create}
      >
        <div className="actionHeader">
          <div className="title">
            <i className="fas fa-circle-notch"></i>
            <h3>{selectData[0]?.name}</h3>
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
          <form onSubmit={handleSubmit(createGif)}>
            <div className="actionInput">
              {[...Array(selectData[0]?.box_count).keys()].map((item,index) => (
                <div key={index}>
                  <label htmlFor={`TextField-${item + 1}`}>
                    Text Field {item + 1}
                  </label>
                  <TextInput
                    type="text"
                    placeholder={`TextField-${item + 1}`}
                    TextID={`TextField${item + 1}`}
                    reference={register}
                  />
                </div>
              ))}
            </div>
            <div className="action">
              <Button type="Submit" iconClassName="fas fa-plus" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
