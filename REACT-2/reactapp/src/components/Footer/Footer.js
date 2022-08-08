import React, { Component } from 'react'
import './Footer.css'
class Footer extends Component {
  render() {
    return (
     <footer>
        <p>Copyright{new Date().getFullYear()}</p>
     </footer>
    )
  }
}

export default Footer