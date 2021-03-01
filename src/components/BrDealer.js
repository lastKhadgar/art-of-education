import React from 'react'

const BrDealer = ({ br }) => {
  if (br && br > 0) {
    const array = new Array(br).fill('')
    return <>{array.map((item, index) => <br key={index}/>)}</>
  } else {
    return <div style={{ width: 50, display: 'inline-block' }}></div>
  }
}

export default BrDealer