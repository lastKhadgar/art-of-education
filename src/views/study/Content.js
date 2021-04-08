import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const Content = ({ allData, bigStepNum, nextBigStep }) => {
  return (
    <>
      {
        bigStepNum === 0 ? 
        <Step1 allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 1 ? 
        <Step2 allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 2 ? 
        <Step3 allData={allData} nextBigStep={nextBigStep} /> :
        bigStepNum === 3 ? 
        <Step4 allData={allData} nextBigStep={nextBigStep} /> : null
      }
    </>
  )
}

export default Content