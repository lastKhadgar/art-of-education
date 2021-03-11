import React from 'react'
import { Button, Modal } from 'antd';

const Analysiser = ({ style, question }) => {

  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Button style={style} onClick={() => {setVisible(true)}}>题目解析</Button>
      <Modal width={800} zIndex={2000} visible={visible} footer={null} maskClosable={false}
          onCancel={() => {setVisible(false)}}>
        <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
      </Modal>
    </>
  )
}

export default Analysiser