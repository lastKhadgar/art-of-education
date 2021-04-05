import React from 'react'
import { Row, Col } from 'antd';

import CalQuestion from './CalQuestion'
import TorFQuestion from './TorFQuestion'
import ChooseQuestion from './ChooseQuestion'

const Step4 = ({ allData, nextBigStep }) => {

  const [showAnswer, setShowAnswer] = React.useState(false)

  return (<>
    {
      allData || allData.length > 1 ?
      allData.map((item, index) => (
        <Row key={index}>
          <Col span={1}><div style={{ fontWeight: 'bold', lineHeight: 2.5 }}>{index + 1}、</div></Col>
          <Col span={23}>
            {
              item.questionType === 'cal' ? // 计算题
              <CalQuestion data={item} showAnswer={showAnswer} />
              : item.questionType === 'TorF' ? // 判断题
              <TorFQuestion data={item} showAnswer={showAnswer} />
              : item.questionType === 'choose' ? // 选择题
              <ChooseQuestion data={item} showAnswer={showAnswer} />
              : null
            }
          </Col>
        </Row>
      ))
      : null
    }
  </>)
}

export default Step4