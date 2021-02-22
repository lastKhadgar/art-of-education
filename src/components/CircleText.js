import React from 'react'
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `border ${duration}ms ease-out`,
  borderRadius: '5px'
  // opacity: 0,
  // backgroundColor: 'gray'
}

const transitionStyles = {
  // entering: { border: 'red solid 4px' },
  entered: { border: 'red solid 2px' },
  // exiting: { border: 'white solid 2px' },
  exited: { border: 'white solid 2px' },
};

const CircleText = props => {
  return (
    <Transition in={props.trigger} timeout={duration}>
      {state => (
        <span style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          { props.text }
        </span>
      )}
    </Transition>
  )
}

export default CircleText