import React from 'react'
import { useMount, useUnmount, useToggle } from '../hooks'

const Mount = () => {
	const { isToggled, toggle } = useToggle()

	return (
		<div>
			<button onClick={toggle}>Toggle</button>
			{isToggled && <Unmount />}
		</div>
	)
}

export const Unmount = () => {
	useMount(() => {
		console.log('I Mounted!')
	})
	useUnmount(() => {
		console.log('I Unmounted!')
	})
	return (
		<div>
			Unmount me
		</div>
	)
}

export default Mount
