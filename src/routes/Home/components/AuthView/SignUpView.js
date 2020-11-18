/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react'
import axios from 'axios'

class SignUpView extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      hasError: false,
      errorMessage: ''
    }
  }

  onInputChanged (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSignUp (e) {
    e.preventDefault()

    console.log(this.state)
    const model = this.state
    // bilgileri API`dan cekmek icin attigmiz HTTP request
    axios
      .post('http://localhost:3300/v1/auth/sign-up', model)
      .then(function (res) {
        console.log('res', res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  renderError () {
    return (
      <div
        className='alert alert-danger'
        style={{
          width: '516px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px'
        }}
      >
        {this.state.errorMessage}
      </div>
    )
  }

  render () {
    const { onChangeView } = this.props
    const Error = this.renderError.bind(this)
    return (
      <div>
        <form className='form-inline' onSubmit={this.onSignUp.bind(this)}>
          <div className='form-group'>
            <input
              type='text'
              name='email'
              className='form-control'
              placeholder='E-Posta'
              value={this.state.email}
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <div className='form-group mx-sm-3'>
            <input
              type='password'
              name='password'
              className='form-control'
              placeholder='Şifre'
              value={this.state.password}
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Kayıt Ol!
          </button>
        </form>
        {this.state.hasError ? <Error /> : null}
        <p>
          Zaten üye misiniz? <br />O zaman giriş yapmak için{' '}
          <b>
            <u>
              <a
                style={{ fontSize: '18px' }}
                href='#'
                onClick={e => {
                  e.preventDefault()
                  onChangeView(1)
                }}
              >
                tıklayınız.
              </a>
            </u>
          </b>
        </p>
      </div>
    )
  }
}

export default SignUpView
