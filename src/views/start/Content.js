import React from 'react'
import Appear from './../../components/Appear'
import BrDealer from './../../components/BrDealer'

const Content = ({ dataList }) => {
  return (
    <>
      <div style={{ fontSize: 14, letterSpacing: 1, margin: '20px 30px' }}>
        { dataList.map((item, index) => {
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
    </>
  )
}

export default Content