import React from 'react'
import PropTypes from 'prop-types'

import Slot from './Slot'

const Slots = props => (
  <div className="slot-container row">
    <Slot slotIndex="one" slotPosition={props.slotPositions[0]} />
    <Slot slotIndex="two" slotPosition={props.slotPositions[1]} />
    <Slot slotIndex="three" slotPosition={props.slotPositions[2]} />
  </div>
)

Slots.propTypes = {
  slotPositions: PropTypes.array,
}

export default Slots
