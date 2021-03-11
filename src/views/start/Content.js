import React from 'react'
import BasicPoints from './BasicPoints'
import Question from './Question'

const Content = ({ allData, bigStepNum, nextBigStep }) => {
  return (
    <>
      {
        bigStepNum === 0 ? 
        <BasicPoints allData={allData} nextBigStep={nextBigStep} /> :
        <Question allData={allData} nextBigStep={nextBigStep} />
      }
    </>
  )
}

export default Content