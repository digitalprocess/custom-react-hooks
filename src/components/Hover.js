import React from 'react'
import { useHover, useWindowWidth, useMeasure } from '../hooks'

import black from "../black.png";
import {Card} from '../Elements'

const Hover = () => {
	const [isHovered, bind] = useHover()
	const width = useWindowWidth()
	const [{ref}, bounds] = useMeasure()
	console.log(bounds)

	if (width < 800) return null

	return (
		<div>
			<Card
				ref={ref}
				{...bind}
				style={{background: isHovered
					? "var(--black)"
					: "var(--green)"
				}}
			>
				<h3>Some card</h3>
				<img src={black} alt="black" />
			</Card>
		</div>
	)
}

export default Hover
