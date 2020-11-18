/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import LoginView from './LoginView'
import PaswordView from './PaswordView'
import SignUpView from './SignUpView'

class AuthView extends Component {
  constructor () {
    super()
    // 1 : login Ekrani
    // 2 : sign-up Ekrani
    // 3 : reset Ekrani
    this.state = {
      currentView: 2
    }
  }

  changeView (newView) {
    this.setState({
      currentView: newView
    })
  }
  render () {
    return this.state.currentView === 1 ? (
      <LoginView onChangeView={() => this.changeView} />
    ) : this.state.currentView === 2 ? (
      <SignUpView onChangeView={() => this.changeView} />
    ) : (
      <PaswordView onChangeView={() => this.changeView} />
    )
  }
}

export default AuthView
