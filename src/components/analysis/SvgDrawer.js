import React from 'react'

const SvgDrawer = ({ markList, textList, setLoading }) => {

  const [showList, setShowList] = React.useState([])
  const [showList2, setShowList2] = React.useState([])

  React.useEffect(() => {
    let tempNum = 0
    // 二维数组转一维数组
    let resultList = []
    textList.forEach(item => {
      resultList.push(...item)
    })

    setShowList(markList.slice(0, 1))
    let svgInterval = setInterval(() => {
      if (tempNum < markList.length - 1) {
        tempNum++
        setShowList(markList.slice(0, tempNum + 1))
      } else {
        setShowList2(resultList)
        clearInterval(svgInterval)
        setLoading(false)
      }
    }, 1000)
    return () => {
      clearInterval(svgInterval)
    }
  }, [markList])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ width: '100%', height: '100%' }}>
      {
        showList.map((item, index) => <SvgTypeDealer key={index} item={item} />)
      }
      {
        showList2.map((item, index) => 
        <text key={index} {...item}>{item.content}</text>)
      }
      <defs>
        <marker id="Triangle" viewBox="0 0 20 20" refX="0" refY="10" fill='red'
            markerWidth="10" markerHeight="10" orient="auto">
          <path d="M 0 0 L 20 10 L 0 20 z" />
        </marker>
      </defs>
    
      {/* <polyline points="10,90 50,80 90,20" fill="none" stroke="black" 
          stroke-width="2" marker-end="url(#Triangle)" /> */}
    </svg>
  )
}

const SvgTypeDealer = ({ item }) => {
  return (
    <>
      {
        item.type === 'ellipse' ?
        <ellipse stroke='red' strokeWidth='2' fillOpacity='0' {...item} />
        : item.type === 'text' ?
        <text {...item}>{item.content}</text>
        : item.type === 'line' ?
        <line stroke='red' strokeWidth='2' marker-end="url(#Triangle)" {...item} />
        : null
      }
    </>
  )
}

export default SvgDrawer