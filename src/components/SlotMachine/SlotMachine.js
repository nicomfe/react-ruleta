import React from 'react'

import Slots from './Slots'
import SpinButton from './SpinButton'
import StatusMessage from './StatusMessage'

class SlotMachine extends React.Component {
  constructor() {
    super()
    this.state = { slotPositions: this.getRandomState() }
  }
  // Generates random landing values for slots using genSlotValue defined at the end of the file
  getRandomState = () => {
    return [this.genSlotValue(), this.genSlotValue(), this.genSlotValue()]
  }

  genSlotValue = () => {
    return Math.floor(Math.random() * 3)
  }

  handleButtonClick = () => {
    // Set count to 0 before each button press
    let count = 0
    // Set a random state as the final state of all slots before we start spinning
    const finalState = this.getRandomState()
    // Make sure we start with a fresh state for all slots on each spin
    let currentState = this.getRandomState()
    // Spinning happens here
    const makeSpin = () => {
      const nextState = currentState
      let hasChanged = false

      // Evaluate whether or not slots are on their final destination, spin to nextState if not
      for (let i = 0; i < 3; i += 1) {
        if (count < 9 || currentState[i] !== finalState[i]) {
          nextState[i] = (currentState[i] + 1) % 3
          hasChanged = true
          $('.spin-button').prop('disabled', true).text('Spinning!').addClass('spinning')
        }
        // Re-enable spin button
        if (count >= 9) {
          $('.spin-button').prop('disabled', false).text('Spin!').removeClass('spinning')
        }
      }

      // Moves reel to the next assigned state if it's not yet on it's final value.
      this.setState({ slotPositions: nextState, isFinal: !hasChanged })

      // Stops reel spinning if we've hit the final state's value
      if (!hasChanged) {
        return
      }
      currentState = this.state.slotPositions
      setTimeout(makeSpin, 100)
      count += 1
    }


    // Actually spin
    makeSpin()
  }

  render() {
    // Define winning states
    const sp = this.state.slotPositions
    const isWinning = (sp[0] === sp[1]) && (sp[1] === sp[2])

    // Make sure winner, winnerClass, and winnerImage strings are undefined until there's an actual win
    let winner = ''
    let winnerClass = ''
    let winnerImage = ''

    // Make sure we're only displaying the win state on final slot positions
    if (isWinning && this.state.isFinal) {
      winner =
        [<h2>{'You\'ve won a cup of coffee!'}</h2>, <h2>{'You\'ve won a cup of tea!'}</h2>, <h2>{'You\'ve won an espresso!'}</h2>][sp[0]]
      winnerClass = [' coffee', ' tea', ' espresso'][sp[0]]
      winnerImage = [
        <div id="coffee-img" className="tossing win-img" />,
        <div id="tea-img" className="tossing win-img" />,
        <div id="espresso-img" className="tossing win-img" />,
      ][sp[0]]
    }
   // Render Machine
    return (
      <section id="content" className="container">
        <main className="react-slots">
          <section className="machine">
            <Slots slotPositions={this.state.slotPositions} />
            <div className="spin row">
              <SpinButton onButtonClick={this.handleButtonClick} />
            </div>
          </section>
          <section className="win row">
            <StatusMessage winner={winner} winnerClass={winnerClass} winnerImage={winnerImage} />
          </section>
        </main>
      </section>
    )
  }
}

export default SlotMachine
