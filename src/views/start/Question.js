import React from 'react'
import { Row, Col, Input, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const styles = {
  question: {
    lineHeight: 2.5
  },
  div: {
    marginBottom: 10
  },
  input: {
    width: 50
  },
  span: {
    marginLeft: 20
  }
}

const AnswerItem = ({ answer, showAnswer }) => {
  const [value, setValue] = React.useState()

  return (
    <div style={styles.div}>
      <Input disabled={showAnswer} value={value} style={styles.input} onChange={e => {setValue(e.target.value)}} />
      {
        !showAnswer ? null :
        value === answer ? <CheckOutlined /> : <><CloseOutlined /> <span style={styles.span}>正确答案： {answer}</span></>
      }
    </div>
  )
}

const Question = ({ data, mediumStepNum }) => {
  const [myAnswer, setMyAnswer] = React.useState([])
  const [showAnswer, setShowAnswer] = React.useState(false)

  const handleChange = (value, index) => {
    setMyAnswer(before => {
      let result = [...before]
      result[index] = value
      return result
    })
  }

  return (<>
    <Row>
      <Col span={24}><div style={{ fontWeight: 'bold' }}>问题{mediumStepNum + 1}：</div></Col>
    </Row>
    <Row>
      <Col offset={1} span={23}>
        <span style={styles.question} dangerouslySetInnerHTML={{ __html: data.question }}></span>
      </Col>
    </Row>
    <Row>
      <Col offset={1} span={23}>
        <span style={{ lineHeight: 3 }}>我的答案： </span>
        {
          data.answer.map((item, index) => (
            <AnswerItem key={index} answer={item} showAnswer={showAnswer} />
          )) 
        }
        <Button type='primary' onClick={() => setShowAnswer(true)}>提交</Button>
      </Col>
    </Row>
  </>)
}

export default Question