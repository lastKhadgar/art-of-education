import React from 'react' 
import { Button } from 'antd';
import Appear from './../../components/Appear'
import BrDealer from './../../components/BrDealer'

const BasicPoints = ({ allData, nextBigStep }) => {

  const [stepNum, setStepNum] = React.useState(1)

  return (
    <>
      <Button disabled={stepNum <= 1} onClick={() => setStepNum(stepNum - 1)}>上一步</Button>
      <Button disabled={stepNum >= allData.length} onClick={() => setStepNum(stepNum + 1)}>下一步</Button>
      <div style={{ fontSize: 16, letterSpacing: 1, margin: '20px 30px' }}>
        { allData.slice(0, stepNum).map((item, index) => {
          if (item.type === 'text') {
            return (
              <>
                <Appear key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                </Appear>
                <BrDealer br={item.br} key={index+'a'} />
              </>
            )
          }
        }) }
      </div>
      { 
        stepNum < allData.length ? null :
        <Button type='primary' onClick={nextBigStep}>开始做题 →</Button>
      }
    </>
  )
}

export default BasicPoints