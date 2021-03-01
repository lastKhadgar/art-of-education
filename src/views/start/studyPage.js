import React from 'react'
import { Card, Button, Cascader, Steps } from 'antd';
import Question from '../../components/main/Question'
import Answer from '../../components/main/Answer'
import Content from './Content'
import ChaptersData from '../../datas/chapters'
import ContentData from '../../datas/ContentData'
const { Step } = Steps;

const data = {
  question: [
    {
      type: 'text',
      content: '用一根长'
    },
    {
      type: 'circleText',
      content: '24cm'
    },
    {
      type: 'text',
      content: '的铁丝围成一个正方形，正方形的'
    },
    {
      type: 'circleText',
      content: '边长'
    },
    {
      type: 'text',
      content: '是多少？'
    }
  ],
  answer: [
    {
      type: 'text',
      content: '已知条件：'
    },
    {
      type: 'text',
      content: '周长24cm',
      br: 2
    },
    {
      type: 'text',
      content: '所求问题：'
    },
    {
      type: 'text',
      content: '正方形边长',
      br: 2
    },
    {
      type: 'text',
      content: '涉及公式：'
    },
    {
      type: 'text',
      content: '边长 × 4 = 周长'
    },
    {
      type: 'text',
      content: '所求问题为 X，带入公式',
      br: 2
    },
    {
      type: 'text',
      content: 'X × 4 = 24'
    },
    {
      type: 'text',
      content: '为保证等式左边只有 X，两边同时除 4',
      br: 2
    },
    {
      type: 'text',
      content: '得： X = 6',
      br: 2
    },
    {
      type: 'text',
      content: '答案： 长方形边长 6cm'
    }
  ],
  step: [
    [
      {
        type: 'answer'
      },
      {
        type: 'question',
        num: 1
      },
      {
        type: 'answer'
      }
    ],
    [
      {
        type: 'question',
        num: 3
      }
    ],
    [
      {
        type: 'answer'
      }
    ],
    [
      {
        type: 'answer'
      }
    ],
    [
      {
        type: 'answer'
      }
    ],
    [
      {
        type: 'answer'
      }
    ]
  ]
}

const StudyPage = () => {
  const [stepNum, setStepNum] = React.useState(-1)
  const [bigStepNum, setBigStepNum] = React.useState(0)
  const [title, setTitle] = React.useState('')
  const [mediumStepNum, setMediumStepNum] = React.useState(0)
  const [dataList, setDataList] = React.useState([[]])
  const [triggers, setTriggers] = React.useState({})
  const [answerList, setAnswerList] = React.useState([])

  // const nextStep = () => {
  //   let newStepNum = stepNum + 1
  //   let step = data.step[newStepNum]
  //   let intervalNum = 1
  //   littleStep(null, step, 0)
  //   let stepInterval = setInterval(() => {
  //     littleStep(stepInterval, step, intervalNum)
  //     intervalNum++
  //   }, 2000)
  //   setStepNum(newStepNum)
  // }
  
  const littleStep = (stepInterval, step, intervalNum) => {
    if (intervalNum >= step.length) {
      clearInterval(stepInterval)
    } else {
      if (step[intervalNum].type === 'question') {
        setTriggers(before => ({ ...before, [step[intervalNum].num]: true }))
      } else if (step[intervalNum].type === 'answer') {
        setAnswerList(before => [ ...before, data.answer[before.length] ])
      }
    }
  }

  const onChange = (value) => {
    if (value && value.length === 3) {
      setDataList(ContentData[value[0]][value[1]][value[2]])
      setTitle(ChaptersData.filter(item => item.value === value[0])[0].
        children.filter(item => item.value === value[1])[0].
        children.filter(item => item.value === value[2])[0].label)
    }
  }

  const nextStep = () => {
    if (dataList[bigStepNum].length === mediumStepNum) {
      setBigStepNum(bigStepNum + 1)
      setMediumStepNum(0)
    } else {
      setMediumStepNum(mediumStepNum + 1)
    } 
  }

  return (
    <>
      <Card style={{ width: '90%', margin: '10px auto' }}>
        <Cascader size="small" options={ChaptersData} onChange={onChange} placeholder="Please select" style={{ width: '100%' }} />
      </Card>
      <Steps size="small" style={{ width: '80%', margin: '0 auto' }} current={bigStepNum}>
        <Step title="知识点速过" />
        <Step title="小试牛刀" />
        <Step title="渐入佳境" />
        <Step title="炉火纯青" />
      </Steps>
      {/* <Card size="small" title="Question 1" style={{ width: '90%', margin: '10px auto' }}
        extra={<Button onClick={nextStep} disabled={stepNum >= data.step.length - 1}>下一步</Button>}>
        <Question content={data.question} triggers={triggers} />
        <Answer content={answerList} />
      </Card> */}
      <Card title={title} style={{ width: '90%', margin: '10px auto' }} extra={<Button onClick={nextStep}>下一步</Button>}>
        <Content dataList={dataList[bigStepNum].slice(0, mediumStepNum)}></Content>
      </Card>
    </>
  )
}

export default StudyPage
