import React from 'react'
import Appear from './../Appear'
import BrDealer from './../BrDealer'

const Answer = props => {
  const answer = props.content?? []

  return(
    <>
      <div style={{ fontSize: 16, letterSpacing: 1, color: '#3f51b5' }}>解题过程</div>
      <div style={{ fontSize: 14, letterSpacing: 1, margin: '20px 30px' }}>
        { answer.map((item, index) => {
          if (item.type === 'text') {
            return (
              <>
                <Appear key={index}>
                  <span>{item.content}</span>
                </Appear>
                <BrDealer br={item.br} key={index+'a'} />
              </>
            )
          }
        }) }
      </div>
    </>
  )
}

export default Answer