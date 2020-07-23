import { useLayoutEffect } from 'react'

export const useScrollFreeze = () => {
	useLayoutEffect(() => {
		// effect
		const original = window.getComputedStyle(document.body).overflow
		document.body.style.overflow = 'hidden'

		return () => {
			// cleanup
			document.body.style.overflow = original
		};
	}, [])
}