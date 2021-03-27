import React, { useState } from "react";
import Button from "../Custom/Button";
import TextInput from "../Custom/TextInput";
import {useForm} from 'react-hook-form'
import useCreateMeme from "../../Hooks/useCreateMeme";

export default function Popup(props) {
  const { selectData, setSelectData } = props;
  const {register,handleSubmit} = useForm();
  // const createMeme = useCreateMeme(1,textOne,textTwo);
  const createGif = (data) => {
    //console.log(createMeme);
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(createGif)}>
    <input name="firstName" ref={register} />
    <select name="gender" ref={register}>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="other">other</option>
    </select>
    <input type="submit" />
  </form>
  );
}
