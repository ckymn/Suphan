/* eslint-disable react/prop-types */
import React from 'react'

const myStyle = { width: '350px', marginRight: '20px' }

const PaswordView = ({ onChangeView }) => (
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
        Reset My Password !
      </button>
    </form>
    <p style={{ fontWeight: '700px', lineHeight: 2 }}>
      Member Login
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

export default PaswordView
