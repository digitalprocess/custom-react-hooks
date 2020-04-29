import React from 'react'
import { useInc } from '../hooks/useInc'

const Inc = () => {
	const [value, { inc, dec }] = useInc()
	return (
		<div>
			<button onClick={dec}>-</button>
			{value}
			<button onClick={inc}>+</button>
		</div>
	)
}

export default Inc
