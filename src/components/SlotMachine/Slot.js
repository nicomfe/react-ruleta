import React from 'react'
import PropTypes from 'prop-types'

const Slot = props => (
  <div className="col-md-4">
    <div className="slot-reel">
      <div className={`slot slot-${props.slotIndex} position-${props.slotPosition}`} />
    </div>
  </div>
)

Slot.propTypes = {
  slotIndex: PropTypes.string,
  slotPosition: PropTypes.number,
}

export default Slot
