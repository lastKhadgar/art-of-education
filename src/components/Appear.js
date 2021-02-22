import React from 'react'
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `all ${duration}ms ease-out`,
  // transitionProperty: 'width height',
  // transitionDuration: '1s 1s',
  // opacity: 0,
  // backgroundColor: 'gray'
}

const transitionStyles = {
  // entering: { opacity: 0.5, transform: 'scale(1.2)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exited: { opacity: 0, transform: 'scale(1.5)' },
};

const Appear = props => {
  const [trigger, setTrigger] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      setTrigger(true)
    })
  }, [])

  return (
    <Transition in={trigger} timeout={duration}>
      {state => (
        <span style={{
          ...defaultStyle,
          ...transitionStyles[state],
          display: 'inline-block'
        }}>
          { props.children }
        </span>
      )}
    </Transition>
  )
}

export default Appear