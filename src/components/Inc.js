import React from 'react'
import { useInc } from '../hooks'

const Inc = () => {
	const [volume, { inc, dec, reset }] = useInc({
		maxValue: 10,
		minValue: 0,
		initial: 5,
		step: 3
	})
	return (
		<div>
			<button onClick={dec}>-</button>
			{volume}
			<button onClick={inc}>+</button><br/>
			<button onClick={reset}>reset</button>
		</div>
	)
}

export default Inc
