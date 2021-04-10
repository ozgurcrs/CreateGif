import React,{useState,useEffect} from 'react'
import Cards from '../components/GifCards/Cards'
import Layout from '../Layout/Layout'

 function Main() {
    return (
        <div className="container">
            <Layout>
                <Cards />
            </Layout>
        </div>
    )
}
export default Main

