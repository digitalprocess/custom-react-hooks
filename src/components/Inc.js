import React, { useState } from 'react'

const Inc = () => {
	const [value, setValue] = useState(0)
	return (
		<div>
			<button onClick={() => setValue(prevState => prevState - 1)}>-</button>
			{value}
			<button onClick={() => setValue(prevState => prevState + 1)}>+</button>
		</div>
	)
}

export default Inc
