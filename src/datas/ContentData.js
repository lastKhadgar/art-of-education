const ContentData = {
  seven2: {
    chapter6: {
      section6_1: [
        [
          { type: 'text', content: '5<sup>2</sup> = 25' },
          { type: 'text', content: '平方根？算数平方根？', br: 1 },
          { type: 'text', content: '25 的算数平方根是 5，平方根是 5 和 -5' },
          { type: 'text', content: '为什么平方根是正数负数，算数平方根只能是正数？？？', br: 1 },
          { type: 'text', content: '可以这样理解：' },
          { type: 'text', content: '掰手指头算数的时候，还不知道什么是负数呢' }
        ],
        [
          {
            type: 'question',
            questionType: 'cal',
            question: `求下列各数的算数平方根：<br/>
              (1) 9/16 (2) 11<sup>2</sup> (3) 0.25  `,
            answer: ['3/4', '11', '0.5'],
            analysis: [
              {
                marks: [
                  { type: 'ellipse', cx: 225, cy: 40, rx: 70, ry: 20 },
                  { type: 'text', x: 310, y: 46, fill: 'red', fontSize: '20', content: '正数' }
                ],
                text: []
              },
              {
                marks: [
                  { type: 'ellipse', cx: 61, cy: 76, rx: 10, ry: 13 },
                  { type: 'ellipse', cx: 93, cy: 76, rx: 13, ry: 13 },
                ],
                text: [
                  { x: 20, y: 250, fill: 'black', fontSize: '16', content: '1、分数开方相当于' },
                  { x: 160, y: 250, fill: 'red', fontSize: '20', content: '分子分母分别开方' }
                ]
              },
              {
                marks: [
                  { type: 'ellipse', cx: 180, cy: 70, rx: 10, ry: 10 },
                ],
                text: [
                  { x: 20, y: 290, fill: 'black', fontSize: '16', content: '2、开方和平方互为逆运算' },
                  { x: 210, y: 290, fill: 'red', fontSize: '20', content: '可抵消' }
                ]
              },
              {
                marks: [
                  { type: 'ellipse', cx: 250, cy: 77, rx: 30, ry: 15 },
                  { type: 'line', x1: 280, y1: 77, x2: 340, y2: 77 },
                  { type: 'text', x: 370, y: 83, fill: 'red', fontSize: '18', content: '25/100' }
                ],
                text: [
                  { x: 20, y: 330, fill: 'black', fontSize: '16', content: '3、小数转化为' },
                  { x: 130, y: 330, fill: 'red', fontSize: '20', content: '分数' },
                  { x: 180, y: 330, fill: 'black', fontSize: '16', content: '再开方' }
                ]
              }
            ]
          },
          {
            type: 'question',
            questionType: 'TorF',
            question: `判断下列说法是否正确`,
            subQuestion: [
              '5/7 是 25/49 的一个平方根',
              '(-6)<sup>2</sup> 的平方根是 -6',
              '0 的平方根和算数平方根都是 0'
            ],
            answer: [true, false, true],
            analysis: [
              {
                marks: [
                  { type: 'ellipse', cx: 310, cy: 77, rx: 46, ry: 20 },
                  { type: 'text', x: 370, y: 84, fill: 'red', fontSize: '20', content: '正负数两个值' }
                ],
                text: [
                  { x: 20, y: 250, fill: 'black', fontSize: '16', content: '1、25/49 平方根有两个数，±5/7，5/7 是' },
                  { x: 320, y: 250, fill: 'red', fontSize: '20', content: '其中一个' }
                ]
              },
              {
                marks: [
                  { type: 'ellipse', cx: 173, cy: 114, rx: 46, ry: 20 },
                  { type: 'text', x: 280, y: 122, fill: 'red', fontSize: '20', content: '正负数两个值' }
                ],
                text: [
                  { x: 20, y: 290, fill: 'black', fontSize: '16', content: '2、36 平方根有两个数，' },
                  { x: 190, y: 290, fill: 'red', fontSize: '20', content: '±6' }
                ]
              },
              {
                marks: [],
                text: [
                  { x: 20, y: 330, fill: 'black', fontSize: '16', content: '3、' },
                  { x: 45, y: 330, fill: 'red', fontSize: '20', content: '关键点' }
                ]
              },
            ]
          }
        ],
        [],
        []
      ]
    }
  }
}

export default ContentData