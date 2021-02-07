import React from 'react'
import { Card } from 'antd';
import QuestionsData from '../QuestionsData'

const data = {
  question: '用一根长 24cm 的铁丝围成一个正方形，正方形的边长是多少？',
  step: [
    {
      type: '',
      content: '24cm'
    }
  ]
}

const Start = () => {
  return (
    <Card size="small" title="Question 1" style={{ width: '90%', margin: '30px auto' }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

export default Start
