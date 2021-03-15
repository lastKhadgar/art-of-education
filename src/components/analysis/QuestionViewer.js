import React from 'react'

const QuestionViewer = ({ question }) => {
  return (<>
    {
      question.questionType === 'cal' ?
      <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
      : question.questionType === 'TorF' ?
      <>
        <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
        {
          question.subQuestion?.map((item, index) => {
            return (<>
              <br />
              { index + 1 }、
              <span key={index} dangerouslySetInnerHTML={{ __html: item }}></span>
            </>)
          })
        }
      </>
      : <span>无题目类型</span>
    }
  </>)
}

export default QuestionViewer