/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import LoginView from './LoginView'
import PaswordView from './PaswordView'
import SignUpView from './SignUpView'

class AuthView extends Component {
  constructor () {
    super()
    // 1 : giris Ekrani
    // 2 : kayit Ekrani
    // 3 : reset Ekrani
    this.state = {
      currentView: 1
    }
  }

  changeView (newView) {
    this.setState({
      currentView: newView
    })
  }
  render () {
    return this.state.currentView === 1 ? (
      <LoginView onChangeView={this.changeView.bind(this)} />
    ) : this.state.currentView === 2 ? (
      <SignUpView onChangeView={this.changeView.bind(this)} />
    ) : (
      <PaswordView onChangeView={this.changeView.bind(this)} />
    )
  }
}

export default AuthView
