import React, { useState } from 'react'
import { Row, Col, Input, Button, Radio } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Analysis from '../../../components/analysis'

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
  },
  right: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green'
  },
  wrong: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red'
  }
}

/* --------------- 计算题 ------------------- */
const AnswerItem = ({ answer, showAnswer }) => {
  const [value, setValue] = React.useState()

  return (
    <div style={styles.div}>
      <Input disabled={showAnswer} value={value} style={styles.input} onChange={e => {setValue(e.target.value)}} />
      {
        !showAnswer ? null :
        value === answer ? <span style={styles.right}>√</span> : 
        <><span style={styles.wrong}>×</span> <span style={styles.span}>正确答案： {answer}</span></>
      }
    </div>
  )
}

const CalQuestion = ({ data, showAnswer }) => {
  return (<>
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
      </Col>
    </Row>
  </>)
}

/* --------------- 判断题 ------------------- */
const SubItem = ({ num, sub, answer, showAnswer }) => {
  const [value, setValue] = useState()

  return (
    <>
      <Col style={styles.div} offset={1} span={15}>
        {num}、
        <span dangerouslySetInnerHTML={{ __html: sub }}></span>
      </Col>
      <Col span={8}>
        <Radio.Group disabled={showAnswer} onChange={e => setValue(e.target.value)} value={value}>
          <Radio value={true}><CheckOutlined /></Radio>
          <Radio value={false}><CloseOutlined /></Radio>
        </Radio.Group>
        {
          !showAnswer ? null :
          value === answer ? <span style={styles.right}>√</span> : <span style={styles.wrong}>×</span>
        }
      </Col>
    </>
  )
}

const TorFQuestion = ({ data, showAnswer }) => {
  return (<>
    <Row>
      <Col offset={1} span={23}>
        <span style={styles.question} dangerouslySetInnerHTML={{ __html: data.question }}></span>
      </Col>
    </Row>
    <Row>
      {
        data.subQuestion.map((item, index) => (
          <SubItem key={index} num={index+1} sub={item} answer={data.answer[index]} showAnswer={showAnswer} />
        )) 
      }
    </Row>
  </>)
}

const Step2 = ({ allData, nextBigStep }) => {
  const [questionNum, setQuestionNum] = React.useState(0)
  const [showAnswer, setShowAnswer] = React.useState(false)

  const nextQuestion = () => {
    setShowAnswer(false)
    setQuestionNum(questionNum + 1)
  }

  // 下一阶段
  const nextBigStep1 = () => {
    setShowAnswer(false)
    setQuestionNum(0)
    nextBigStep()
  }

  return (<>
    <Row>
      <Col span={24}><div style={{ fontWeight: 'bold' }}>问题{questionNum + 1}：</div></Col>
    </Row>
    {
      allData[questionNum].questionType === 'cal' ?
      <CalQuestion data={allData[questionNum]} showAnswer={showAnswer} />
      : allData[questionNum].questionType === 'TorF' ?
      <TorFQuestion data={allData[questionNum]} showAnswer={showAnswer} />
      : null
    }
    <Row>
      <Col offset={1} span={23}>
        {
          showAnswer ? 
          <>
            <Analysis question={allData[questionNum]} />
            {
              questionNum >= allData.length - 1 ?
              <Button type='primary' onClick={nextBigStep1}>此阶段完成，进入下一阶段 →</Button>
              :
              <Button type='primary' onClick={nextQuestion}>下一题</Button>
            }
          </> : 
          <Button type='primary' onClick={() => setShowAnswer(true)}>提交</Button>
        }
      </Col>
    </Row>
  </>)
}

export default Step2