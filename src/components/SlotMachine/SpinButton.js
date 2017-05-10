import React from 'react'
import PropTypes from 'prop-types'

const SpinButton = (props) => {
  const handleClick = () => {
    props.onButtonClick()
  }

  return (
    <div className="col-md-4 col-md-offset-4">
      <button className="spin-button" onClick={handleClick}>Spin!</button>
    </div>
  )
}

SpinButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
}

export default SpinButton
