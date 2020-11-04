/* eslint-disable react/prop-types */

import React from 'react'
import { Link } from 'react-router'

// ------------state`e ihtiyaci olan--------------
class Header extends React.Component {
  constructor () {
    super()
    this.state = { // state kullanicaksan class olusturulmali
      isNavOpen: false
    }
  }
  buttonClicked () {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render () {
    console.log('RENDERING')
    return (
      <header>
        <nav className=' container navbar navbar-expand-lg navbar-light justify-content-between'>
          <a className='navbar-brand' href='#'>
            {' '}
            REACT LOGIN FORM
          </a>
          <button
            className='navbar-toggler'
            type='button'
            // eslint-disable-next-line react/jsx-no-bind
            onClick={this.buttonClicked.bind(this)}
          >
            <span className='navbar-toggler-icon'> </span>
          </button>
          <div
            className=' navbar-collapse'
            style={{ display: this.state.isNavOpen ? 'block' : 'none' }}
          >
            <ul className='navbar-nav '>
              <li className='nav-item '>
                <Link to='/' className='nav-link' activeClassName='active'>
                  Home Page
                </Link>
              </li>
              <li className='nav-item '>
                <Link to='/about' className='nav-link' activeClassName='active'>
                  About
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to='/contact'
                  className='nav-link'
                  activeClassName='active'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

// const Header = props => {
//     let { title, user, age } = props

//     return (
//       <div>
//         {title} - {user} - {age}
//       </div>
//     )
//   }

// -----------state`e ihtiyaci olmayan---------
// const Header = ({ title, user, age }) => {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

export default Header
