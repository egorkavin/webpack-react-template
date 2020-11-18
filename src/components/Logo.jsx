import React from 'react'
import '../scss/Logo.scss'

export default function Logo({ logo }) {
    return <img className='logo' src={logo}></img>
}