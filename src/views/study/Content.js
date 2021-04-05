import React from 'react'
import BasicPoints from './BasicPoints'
import Question from './Question'
import Step4 from './Step4'

const Content = ({ allData, bigStepNum, nextBigStep }) => {
  return (
    <>
      {
        bigStepNum === 0 ? 
        <BasicPoints allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 1 ? 
        <Question allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 2 ? 
        <Question allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 3 ? 
        <Step4 allData={allData} nextBigStep={nextBigStep} /> : null
      }
    </>
  )
}

export default Content