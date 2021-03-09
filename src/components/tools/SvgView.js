import React from 'react'

const SvgView = () => {
  return (
    <div style="position: relative">
		<div style="width: 300px; height: 100px; background: #ddd"></div>
		<div style="width: 300px; height: 100px; border: solid red 1px; position: absolute; top: 0px">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 100%; height: 100%">
			  <ellipse cx="150" cy="50" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
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
  )
}

export default SvgView