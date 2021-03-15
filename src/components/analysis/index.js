import React from 'react'
import { Button, Modal } from 'antd';
import SvgDrawer from './SvgDrawer'
import QuestionViewer from './QuestionViewer'

const style = {
  div: {
    position: 'relative'
  },
  div1: {
    width: 700,
    height: 500,
    background: '#ddd',
    fontSize: 24,
    fontWeight: 500,
    padding: 20
  },
  div2: {
    width: 700,
    height: 500,
    position: 'absolute',
    top: 32
  },
  btn: {
    marginRight: 10
  }
}

const Analysiser = ({ question }) => {

  const [visible, setVisible] = React.useState(false)
  const [stepNum, setStepNum] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

  const stepChange = (num) => {
    setLoading(true)
    setStepNum(stepNum + num)
  }

  return (
    <>
      <Button style={style.btn} onClick={() => {setVisible(true)}}>题目解析</Button>
      <Modal width={800} zIndex={2000} visible={visible} footer={null} maskClosable={false}
          onCancel={() => {setVisible(false)}}>
        <div style={style.div}>
          <Button style={style.btn} disabled={stepNum <= 0} onClick={() => stepChange(-1)}>上一步</Button>
          <Button disabled={stepNum >= question.analysis.length} loading={loading} onClick={() => stepChange(1)}>下一步</Button>
          <div style={style.div1}>
            <QuestionViewer question={question} />
          </div>
          <div style={style.div2}>
            <SvgDrawer
              markList={stepNum ? question.analysis[stepNum - 1].marks : []} 
              textList={stepNum ? question.analysis.slice(0, stepNum).map(item => item.text) : []}
              setLoading={setLoading}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Analysiser