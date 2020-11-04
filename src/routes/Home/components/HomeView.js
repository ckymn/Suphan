import React from 'react'
import AuthView from './AuthView/AuthView'

export const HomeView = () => (
  <div className='home-container'>
    <div className='container'>
      <h1>
        Fatebook🎬 Login
        <br />
        Fill The Gaps Fully 😋
      </h1>
      <AuthView />
    </div>
  </div>
)

export default HomeView
