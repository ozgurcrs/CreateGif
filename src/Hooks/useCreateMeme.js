import React, { useState } from 'react'
import axios from 'axios'

function useCreateMeme({templateID,textOne,textTwo}) {
   const [meme,setMeme] = useState(null);

   axios.post(`${process.env.REACT_APP_MEMEURL}caption_image?username=${process.env.REACT_APP_USERNAME}&
   password=${process.env.REACT_APP_PASSWORD}&
   text0=${textOne}&
   text1=${textTwo}&
   template_id=135678846`).then(response => {
            console.log(response);
        })

   return meme;
}


export default useCreateMeme;