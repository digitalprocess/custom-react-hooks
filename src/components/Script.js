import React from 'react'
import { useScript } from '../hooks';

const Script = ({src}) => {
	const [isLoaded, isError] = useScript(src)
	console.log('isLoaded, isError', isLoaded, isError)
	if (!isLoaded) return null

	return (
		<>
		</>
	)
}

export default Script
