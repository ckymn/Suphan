/* eslint-disable react/prop-types */
import React from 'react'

const LoginView = ({ onChangeView }) => (
  <div>
    {' '}
    <form className='form-inline'>
      <div className='form-group mb-2'>
        <input type='text' className='form-control' placeholder='E-Mail' />
      </div>
      <div className='form-group mx-sm-3 mb-2'>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
        />
      </div>
      <button type='submit' className='btn btn-primary mb-2'>
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

export default LoginView
