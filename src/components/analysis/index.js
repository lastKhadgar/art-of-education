import React from 'react'
import { Button, Modal } from 'antd';

const style = {
  div: {
    position: 'relative'
  },
  div1: {
    width: 700,
    height: 500,
    background: '#ddd',
    fontSize: 20,
    fontWeight: 500
  },
  div2: {
    width: 700,
    height: 500,
    border: 'solid red 1px',
    position: 'absolute',
    top: 0
  },
  btn: {
    marginRight: 10
  }
}

const Analysiser = ({ question }) => {

  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Button style={style.btn} onClick={() => {setVisible(true)}}>题目解析</Button>
      <Modal width={800} zIndex={2000} visible={visible} footer={null} maskClosable={false}
          onCancel={() => {setVisible(false)}}>
        <div style={style.div}>
          <div style={style.div1}>
            <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
          </div>
          <div style={style.div2}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ width: '100%', height: '100%' }}>
              <ellipse cx="150" cy="50" rx="20" ry="15" stroke='red' stroke-width='2' fill-opacity='0' />
              <defs>
                <marker id="Triangle" viewBox="0 0 20 20" refX="0" refY="10"
                    markerWidth="10" markerHeight="10" orient="auto">
                  <path d="M 0 0 L 20 10 L 0 20 z" />
                </marker>
              </defs>
            
              <polyline points="10,90 50,80 90,20" fill="none" stroke="black" 
                  stroke-width="2" marker-end="url(#Triangle)" />
            </svg>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Analysiser