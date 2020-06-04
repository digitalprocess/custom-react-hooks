import React from 'react'
import { useHover } from '../hooks'

import black from "../black.png";
import {Card} from '../Elements'

const Hover = () => {
	const [isHovered, bind] = useHover()
	console.log(isHovered)

	return (
		<div>
			<Card
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
