import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div className='container-fluid'>
    <Header />
    {children}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
