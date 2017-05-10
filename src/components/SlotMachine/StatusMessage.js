import React from 'react'
import PropTypes from 'prop-types'

const StatusMessage = props => {
  console.log(props)
  return (
    <div className={`row ${props.winnerClass}`}>
      <div className="col-md-12">
        {props.winner}
      </div>
      <div className="col-md-12">
        {props.winnerImage}
      </div>
    </div>
  )
}

StatusMessage.propTypes = {
  winnerClass: PropTypes.string,
  winner: PropTypes.string,
  winnerImage: PropTypes.string,
}

export default StatusMessage
