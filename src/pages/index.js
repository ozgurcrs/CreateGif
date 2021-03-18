import React from 'react'
import Cards from '../components/GifCards/Cards'
import Layout from '../Layout/Layout'


export default function index() {
    return (
        <div className="container">
            <Layout>
                <Cards />
            </Layout>
        </div>
    )
}
