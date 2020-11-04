/* eslint-disable react/prop-types */
import React from 'react'

const myStyle = { width: '400px', marginRight: '20px' }

const SignUpView = ({ onChangeView }) => (
  <div>
    {' '}
    <form className='form-inline'>
      <div className='form-group mb-2'>
        <input
          style={myStyle}
          type='text'
          className='form-control'
          placeholder='E-Mail'
        />
      </div>
      <button type='submit' className='btn btn-primary mb-2'>
        Sign Up
      </button>
    </form>
    <p>
      If You Are Already a Member ?
      <br />
      Click To{' '}
      <u>
        <a
          href='#'
          onClick={e => {
            e.preventDefault()
            onChangeView(1)
          }}
        >
          login.
        </a>
      </u>
    </p>
  </div>
)

export default SignUpView
