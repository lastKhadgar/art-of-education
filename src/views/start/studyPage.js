import React from 'react'
import { Card, Button, Cascader, Steps, message } from 'antd';
import Content from './Content'
import ChaptersData from '../../datas/chapters'
import ContentData from '../../datas/ContentData'
const { Step } = Steps;

const StudyPage = () => {
  const [bigStepNum, setBigStepNum] = React.useState(0)
  const [title, setTitle] = React.useState('')
  const [dataList, setDataList] = React.useState()

  const onChange = (value) => {
    if (value && value.length === 3) {
      setDataList(ContentData[value[0]][value[1]][value[2]])
      setTitle(ChaptersData.filter(item => item.value === value[0])[0].
        children.filter(item => item.value === value[1])[0].
        children.filter(item => item.value === value[2])[0].label)
    }
  }

  const nextBigStep = () => {
    setBigStepNum(bigStepNum + 1)
  }

  return (
    <>
      <Card style={{ width: '90%', margin: '10px auto' }}>
        <Cascader size="small" options={ChaptersData} onChange={onChange} placeholder="Please select" style={{ width: '100%' }} />
      </Card>
      {
        !dataList ? null : 
        <>
          <Steps size="small" style={{ width: '80%', margin: '0 auto' }} current={bigStepNum}
              onChange={ value => setBigStepNum(value) }>
            <Step title="知识点速过" />
            <Step title="小试牛刀" />
            <Step title="渐入佳境" />
            <Step title="炉火纯青" />
          </Steps>
          <Card title={title} style={{ width: '90%', margin: '10px auto' }}>
            <Content allData={dataList[bigStepNum]} bigStepNum={bigStepNum} nextBigStep={nextBigStep}></Content>
          </Card>
        </>
      }
    </>
  )
}

export default StudyPage
