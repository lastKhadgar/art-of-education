import React from 'react'
import BasicPoints from './BasicPoints'
import Question from './Question'

const Content = ({ allData, bigStepNum, mediumStepNum }) => {

  let data
  if (bigStepNum === 0) { // 知识点
    data = allData[bigStepNum].slice(0, mediumStepNum)
  } else { // 题目
    data = allData[bigStepNum][mediumStepNum]
  }
  

  return (
    <>
      {
        bigStepNum === 0 ? 
        <BasicPoints dataList={data} /> :
        <Question data={data} mediumStepNum={mediumStepNum} />
      }
    </>
  )
}

export default Content