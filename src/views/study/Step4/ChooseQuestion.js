import React from 'react'
import { Radio, Row, Col } from 'antd';

const styles = {
  question: {
    lineHeight: 2.5
  }
}

const CalQuestion = ({ data, showAnswer }) => {

  const [value, setValue] = React.useState();
  const ABC = ['A', 'B', 'C', 'D']

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (<>
    <Row>
      <Col span={24}>
        <span style={styles.question} dangerouslySetInnerHTML={{ __html: data.question }}></span>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Radio.Group onChange={handleChange} value={value}>
          {
            data.options && data.options.length > 0 ?
            data.options.map((item, index) => <Radio key={index} value={index+1}>{ABC[index]+'.'+item}</Radio>)
            : '该题无选项'
          }
        </Radio.Group>
      </Col>
    </Row>
  </>)
}

export default CalQuestion