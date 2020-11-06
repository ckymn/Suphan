/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { userInit } from 'store/userReducer'

class LoginView extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  // giris yapildiginda api tarafina gidecek bilgiler
  onUserClick () {
    // HTTP call
    const user = {
      name: 'Muhammet Cokyaman',
      email: 'M_ckymn@account.ly',
      age: 21,
      gender: 'male'
    }
    this.props.loginUserData(user)
  }
  emailChanged (e) {
    this.setState({
      email: e.target.value
    })
  }
  passwordChanged (e) {
    this.setState({
      password: e.target.value
    })
  }
  render () {
    const onChangeView = this.props.onChangeView
    return (
      <div>
        {' '}
        <form className='form-inline'>
          <div className='form-group mb-2'>
            <input
              type='text'
              className='form-control'
              placeholder='E-Mail'
              value={this.state.email}
              onChange={this.emailChanged.bind(this)}
            />
          </div>
          <div className='form-group mx-sm-3 mb-2'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              value={this.state.password}
              onChange={this.passwordChanged.bind(this)}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary mb-2'
            onClick={this.onUserClick.bind(this)}
          >
            Log In
          </button>
          <a className='my-password'>
            <a
              href='#'
              onClick={e => {
                e.preventDefault()
                onChangeView(3)
              }}
            >
              I Forgot My Password !
            </a>
          </a>
        </form>
        <p>
          If You Are Not Yet a Member ?
          <br />
          Click To{' '}
          <b>
            <u>
              <a
                href='#'
                onClick={e => {
                  e.preventDefault()
                  onChangeView(2)
                }}
              >
                register
              </a>
            </u>
          </b>{' '}
          For Free.
        </p>
      </div>
    )
  }
}

// Uygulama durumunun değişmesine neden olabilecek" Action"i göndermenize yarar.
const mapDispatchToProps = dispatch => {
  return {
    loginUserData: user => {
      dispatch(userInit(user)) // action`i guncelleme islemi yapar!
    }
  }
}
// burda useReducer daki "state" nesnesini props olarak donderdi
const mapStateToProps = state => {
  return {
    userData: state.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
