import React from 'react'
import './style.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Navs() {
    const navInfo = [
        { "ListName": "Home", "iconName": "far fa-dizzy", "Link": "/" },
        { "ListName": "Create Gif", "iconName": "far fa-grin-tongue-wink", "Link": "/Create" },
        { "ListName": "Popular", "iconName": "far fa-surprise", "Link": "/Popular" },
        { "ListName": "Trending", "iconName": "far fa-sad-tear", "Link": "/Trending" },
        { "ListName": "Fresh", "iconName": "far fa-grin-tongue-squint", "Link": "/Fresh" }
    ]
    return (
        <header>
            <div className="brand">
                <div className="logo">
                    <img src="/static/dino.png" alt="" />
                </div>
                <div className="title">
                    <h1><i className="fas fa-baby"></i> Jurassic PARK</h1>
                    <span>Maymunu gelir kertenkelesi gelir</span>
                </div>
            </div>
            <nav>
                <ul>
                    {
                        navInfo.map((item, index) => {
                            return (
                                <Link key={index}  to={item.Link}><Nav ListName={item.ListName} iconClassName={item.iconName} /> </Link>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="lineDesign"></div>
        </header>
    )
}
