import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Header.css'

class Header extends Component {
  render() {
    const container=styled.div`
padding: 0 4rem,
`
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
            <Link className='link' to='/about'>Logo.az</Link>
            </div>
            <div className='col-lg-10 text-end'>
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/about'>about</Link>
              <Link className='link' to='/contact'>contact</Link>
            </div>
          </div>
        </div>
        <h2>Header Section</h2>
      </header>
    )
  }
}

export default Header