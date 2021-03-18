import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const actionCard = (id) => {
    console.log(id)
}


function Cards() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/data/").then(response => {
            setData(response.data);
        })
    },[])
    return (
        <section>
            <div className="content">
                <div className="cards">
                    {
                        data.map((item,index) => {
                            return(
                                <Card key={index} memesGif={item.url} id={item.id} onClick={() => actionCard() } title={item.name} />
                            )
                        })
                    }
                    <div className="showCard">
                        <h3>Merhaba</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards