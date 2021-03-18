import React from 'react'
import Navigation from '../components/Navigation/Navs'

export default function Layout({ children }) {
    return (
      
            <div className="container">
                <Navigation />
                {children}
            </div>
      
    )
}
