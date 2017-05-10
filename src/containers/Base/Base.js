import React from 'react'
import PropTypes from 'prop-types'

const BaseContainer = ({ children }) => (
  <div className="row">
    {children}
  </div>
)

BaseContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BaseContainer
