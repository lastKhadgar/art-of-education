import React from 'react'
import CircleText from './../CircleText'

const Question = props => {
  const question = props.content?? []
  const triggers = props.triggers?? []

  return (<div style={{ fontSize: 16, letterSpacing: 2, margin: '30px 30px' }}>
    { question.map((item, index) => {
      if (item.type === 'text') {
        return <span key={index}>{item.content}</span>
      } else if (item.type === 'circleText') {
        return <CircleText text={item.content} trigger={triggers[index]} key={index} />
      }
    }) }
  </div>)
}

export default Question