import React from 'react'
import {
  NavLink as Link 
} from 'react-router-dom'
import '../../css/Header.css'
import Links from '../Links/Links'

const Header = props => {
    
  return (
    // <nav id='navbar' className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
    <nav id='navbar' className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'><h2><b>{`{dna:micro}`}</b></h2></Link>
      <button 
        className='navbar-toggler' 
        type='button' 
        data-toggle='collapse' 
        data-target='#navbarSupportedContent' 
        aria-controls='navbarSupportedContent' 
        aria-expanded='false' 
        aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <Links {...props}/>
        </ul>
      </div>
    </nav>
  )
}

export default Header